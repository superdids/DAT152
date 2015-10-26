package no.hib.dat152.customTags;

import java.io.IOException;
import java.io.StringWriter;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class ShortText extends SimpleTagSupport {

	private Integer maxChars;
	
	public void setMaxChars(Integer maxChars) {
		this.maxChars = maxChars;
	}
	
	@Override
	public void doTag() throws JspException, IOException {
		
		StringWriter stringWriter = new StringWriter();
		//henter verdi fra attributt.
		JspWriter out = getJspContext().getOut();
		//henter verdi fra kroppen til taggen
		
		getJspBody().invoke(stringWriter);
		String result = stringWriter.toString();
		if(maxChars == null || result == null) return;
		if(result.length() > maxChars) 
			result = result.substring(0,maxChars) + "...";
		out.println(result);
		
	}
	
}
