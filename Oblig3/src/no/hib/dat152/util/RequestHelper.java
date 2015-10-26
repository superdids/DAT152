package no.hib.dat152.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import no.hib.dat102.database.AvailableLanguages;
import no.hib.dat102.database.Product;
import no.hib.dat152.models.CartItem;
import no.hib.dat152.models.MyAwesomeCart;

public class RequestHelper {

	public static String getLanguageFromRequest(HttpServletRequest request) {		
		String lang = request.getParameter("language");
		return lang != null ? lang : "en";
	}
	
	public static Cookie getCookie(HttpServletRequest request, String cookieName) {
		Cookie cookie = null;
		Cookie [] cookies = request.getCookies();
		for(Cookie c : cookies) {
			if(c.getName().equals(cookieName)) { cookie = c; break; }
		}
	
		return cookie;
	}
	
	public static HttpServletResponse generateCookie(HttpServletRequest request, 
			HttpServletResponse response, String paramReference,
			String cookieName) {
		String param = request.getParameter(paramReference);
		
		Cookie cookie = new Cookie(cookieName, param);
		response.addCookie(cookie);
		return response;
	}
	
	public static HttpServletRequest setLanguage(HttpServletRequest request) {
		Cookie cookie = RequestHelper.getCookie(request, "locale");
		String dynamic = "en";
		if(cookie != null) 
			dynamic = cookie.getValue();
		
		AvailableLanguages availableLanguages = ServletContext.getAvailableLanguagesFromContext();
		
		request.setAttribute("availableLanguages", availableLanguages.getLanguages());
		request.getSession().setAttribute("language", dynamic);
		return request;
	}
	
	public static HttpServletRequest updateCart(HttpServletRequest request, Product product) {
		MyAwesomeCart cart = (MyAwesomeCart) request.getSession().getAttribute("cart");
		Integer id = product.getProductNumber();
		if(cart == null) {
			cart = new MyAwesomeCart();
			cart.addItem(id, new CartItem(product, 1));
		} else 
			if(cart.inCart(id)) 
				cart.addCount(id);
			else
				cart.addItem(id, new CartItem(product,1));
		
		request.getSession().setAttribute("cart", cart);
		
		return request;
	}
}
