package no.hib.dat152.customTags;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.Locale;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrencyConverter extends SimpleTagSupport {

	private String language = "en_US";
	private Double price;
	private Integer amount;
	
	
	private void setPrice(Double price) {
		this.price = price;
	}
	
	private void setAmount(Integer amount) {
		this.amount= amount;
	}
	
	private void setLanguage(String language) {
		this.language = language;
	}
	
	@Override
	public void doTag() throws JspException, IOException {
	//	StringWriter stringWriter = new StringWriter();
		JspWriter out = getJspContext().getOut();
		
		if (price == null) return;
		Locale loc = new Locale(language);
		if (loc == null) return;
		
		NumberFormat formatter = NumberFormat.getCurrencyInstance(loc);
		String result = null;
		if(amount != null) {
			result = formatter.format(price);
		} else {
			result = formatter.format(price*amount);
		}

		out.print(result);
	}
	
	private Double convertCurrency(Double amt) {
		return null;
	}
}
