package no.hib.dat102.database;

/**
 * Entitet/bønne som representerer en primærnøkkel komposisjon som skal
 * benyttes som primærnøkkel i klassen Description
 * @author Didrik, Lars-Jo, Ståle
 *
 */
public class DescriptionId {
	
	private Integer productNumber;
	private String languageCode;
	
	/**
	 * Tom konstruktør, tilordner 'null' til alle feltvariabler
	 */
	public DescriptionId() {
		this(null,null);
	}
	
	/**
	 * Konstruktør som tilordner verdier til feltvariablene
	 * @param productNumber Produktnummer assosiert til et produkt
	 * @param languageCode Språkkode assosiert til et språk
	 */
	public DescriptionId(Integer productNumber, String languageCode) {
		this.productNumber = productNumber;
		this.languageCode = languageCode;
	}
	
	/**
	 * Henting av produktnummeret
	 * @return Produktnummeret
	 */
	public Integer getProductNumber() {
		return productNumber;
	}
	
	/**
	 * Tilordning av nytt produktnummer
	 * @param productNumber Det nye produktnummeret
	 */
	public void setProductNumber(Integer productNumber) {
		this.productNumber = productNumber;
	}
	
	/**
	 * Henting av språkkode
	 * @return Språkkoden
	 */
	public String getLanguageCode() {
		return languageCode;
	}
	
	/**
	 * Tilordning av ny språkkode
	 * @param languageCode Den nye språkkoden
	 */
	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
	}
	
	@Override
	public boolean equals(Object another) {
		if(another == null) {
			return this == null;
		} 
		
		if(another instanceof DescriptionId) {
			DescriptionId other = (DescriptionId) another;
			return this.productNumber == other.productNumber 
					&& this.languageCode.equals(other.languageCode);
		}
		return false;
	}
}
