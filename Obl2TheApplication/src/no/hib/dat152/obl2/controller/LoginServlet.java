package no.hib.dat152.obl2.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import no.hib.dat152.obl2.database.AppUser;
import no.hib.dat152.obl2.database.AppUserDAO;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		request.getRequestDispatcher("login.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		request.removeAttribute("message");

		boolean successfulLogin = false;

		String username = request.getParameter("username");
		String password = request.getParameter("password");

		if (username != null && password != null) {

			AppUserDAO userDAO = new AppUserDAO();
			AppUser authUser = userDAO.getAuthenticatedUser(username, password);

			if (authUser != null) {
				successfulLogin = true;
				request.getSession().setAttribute("user", authUser);
				System.out.println("User set.");
			} 
		}

		if (successfulLogin) {
			response.sendRedirect("searchpage");

		} else {
			request.setAttribute("message", "Username " + username
					+ ": Login failed!");
			request.getRequestDispatcher("login.jsp")
					.forward(request, response);
		}
	}
}
