package no.hib.dat102.database;

/**
 * Entitet/bønne som representerer et produkt.
 * @author Didrik
 *
 */
public class Product {

	private Integer productNumber;
	private String productName;
	private Double priceInEuro;
	private String relativePathToImg;
	
	/**
	 * Tom konstruktør, tilordner 'null' til alle feltvariabler
	 */
	public Product() {
		this(null,null,null,null);
	}
	
	/**
	 * Konstruktør som tilordner verdier til feltvariablene
	 * @param productNumber Produktnummer assosiert til produktet
	 * @param productName Navnet på produktet
	 * @param priceInEuro Produktets pris, i euro
	 * @param relativePathToImg Relativ sti til bilde av produktet
	 */
	public Product(Integer productNumber, String productName, 
			Double priceInEuro, String relativePathToImg) {
		this.productNumber = productNumber;
		this.productName = productName;
		this.priceInEuro = priceInEuro;
		this.relativePathToImg = relativePathToImg;
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
	 * Henting av produktnavnet
	 * @return Produktnavnet
	 */
	public String getProductName() {
		return productName;
	}
	
	/**
	 * Tilordning av nytt produktnavn
	 * @param productName Produktets nye navn
	 */
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	/**
	 * Henting av produktets pris
	 * @return Produktets pris, i euro
	 */
	public Double getPriceInEuro() {
		return priceInEuro;
	}
	
	/**
	 * Tilordning av ny produktpris
	 * @param priceInEuro Produktets nye pris
	 */
	public void setPriceInEuro(Double priceInEuro) {
		this.priceInEuro = priceInEuro;
	}
	
	/**
	 * Henting av relativ sti til bildet
	 * @return Bildets relative sti
	 */
	public String getRelativePathToImg() {
		return relativePathToImg;
	}
	
	/**
	 * Tilordning av ny bildesti
	 * @param relativePathToImg Den nye stien til bilde av produktet
	 */
	public void setRelativePathToImg(String relativePathToImg) {
		this.relativePathToImg = relativePathToImg;
	}
}
