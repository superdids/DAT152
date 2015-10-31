package no.hib.dat102.database;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Entitet/bønne som holder på en samling med tilgjengelige
 * språk for web applikasjonen
 * @author Didrik, Lars-Jo, Ståle
 *
 */
public class AvailableLanguages implements Serializable {

	private static final long serialVersionUID = 1L;
	private List<String> languages;
	
	/**
	 * Tom konstruktør, oppretter instans av aktuell feltvariabel
	 */
	public AvailableLanguages() {
		languages = new ArrayList<String>();
	}
	
	/**
	 * Henter samlingen med tilgjengelge språk
	 * @return Tilgjengelige språk
	 */
	public List<String> getLanguages() {
		return languages;
	}
	
	/**
	 * Opdaterer tilgjengelige språk med parameter
	 * @param languages Tilgjengelige språk
	 */
	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}
	
	/**
	 * Legger til et nytt språk
	 * @param s Språket som skal legges til
	 */
	public void addLanguage(String s) {
		for(String language : languages) 
			if(language.matches(s)) return;
		languages.add(s);
	}
}