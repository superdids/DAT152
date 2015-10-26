package no.hib.dat152.obl2.controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import no.hib.dat152.obl2.database.SearchItem;
import no.hib.dat152.obl2.database.SearchItemDAO;
import no.hib.dat152.obl2.dictionary.DictionaryDAO;
import no.hib.dat152.util.Validator;

@WebServlet("/dosearch")
public class SearchResultServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private static final String DEFAULT_DICT_URL 
			= "http://localhost:8080/Obl2TheApplication/v003/";

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		if (RequestHelper.isLoggedIn(request)) {

			String dicturl = RequestHelper.getCookieValue(request, "dicturl");
			if (dicturl == null) {
				dicturl = DEFAULT_DICT_URL;
			}

			String user = Validator.validString(request.getParameter("user"));
			String searchkey = Validator.validString(request
					.getParameter("searchkey"));

			Timestamp datetime = new Timestamp(new Date().getTime());
			SearchItem search = new SearchItem(datetime, user, searchkey);
			
			SearchItemDAO searchItemDAO = new SearchItemDAO();
			searchItemDAO.saveSearch(search);
			DictionaryDAO dict = new DictionaryDAO(dicturl);

			List<String> foundEntries = new ArrayList<String>();
			try {
				foundEntries = dict.findEntries(searchkey);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			request.setAttribute("searchkey", searchkey);
			request.setAttribute("result", foundEntries);
			request.getRequestDispatcher("searchresult.jsp").forward(request,
					response);
		} else {
			request.getSession().invalidate();
			request.getRequestDispatcher("index.html").forward(request,
					response);
		}
	}

}
