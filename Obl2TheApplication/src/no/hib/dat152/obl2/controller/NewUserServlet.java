package no.hib.dat152.obl2.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import no.hib.dat152.obl2.database.AppUser;
import no.hib.dat152.obl2.database.AppUserDAO;
import no.hib.dat152.util.Validator;

@WebServlet("/newuser")
public class NewUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("newuser.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		request.removeAttribute("message");

		boolean successfulRegistration = false;

		String username = Validator.validString(request
				.getParameter("username"));
		String password = Validator.validString(request
				.getParameter("password"));
		String confirmedPassword = Validator.validString(request
				.getParameter("confirm_password"));
		String firstName = Validator.validString(request
				.getParameter("first_name"));
		String lastName = Validator.validString(request
				.getParameter("last_name"));
		String mobilePhone = Validator.validString(request
				.getParameter("mobile_phone"));
		String preferredDict = Validator.validString(request
				.getParameter("dicturl"));

		if (password.equals(confirmedPassword)) {

			AppUserDAO userDAO = new AppUserDAO();

			AppUser user = new AppUser(username, userDAO.generatePassHash(password),
					firstName, lastName, mobilePhone);

			userDAO.saveUser(user);

			successfulRegistration = true;
			request.getSession().setAttribute("user", user);
		}

		if (successfulRegistration) {
			Cookie dicturlCookie = new Cookie("dicturl", preferredDict);
			dicturlCookie.setMaxAge(1000000);
			response.addCookie(dicturlCookie);

			response.sendRedirect("searchpage");

		} else {
			request.setAttribute("message", "Registration failed!");
			request.getRequestDispatcher("newuser.jsp").forward(request,
					response);
		}
	}

}
