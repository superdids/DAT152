package no.hib.dat152.customTags;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.Locale;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * Klassen som formaterer utskrift av valuta, avhengig av angitt språkkode.  
 * @author Didrik, Lars-Jo, Ståle
 *
 */
public class CurrencyConverter extends SimpleTagSupport {

	private String language;
	private Double price;
	private Double valueInEuros;


	public void setPrice(Double price) {
		this.price = price;
	}

	public void setLanguage(String language) {
		this.language = language;
	}
	
	public void setValueInEuros(Double valueInEuros) {
		this.valueInEuros = valueInEuros;
	}

	/**
	 * doTag() metoden som må overskrives ved implementasjon av 
	 * egendefinert JSP-tag. 
	 * Foretar formatering og skriver ut resultatet som tagen skal produsere.
	 */
	@Override
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();

		Locale loc = new Locale(language);
		
		if(loc != null) {

			NumberFormat formatter = NumberFormat.getInstance(loc);
			String result = formatter.format(valueInEuros*price);
			out.print(result);
		}
	}
}
