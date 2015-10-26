package no.hib.dat102.database;

/**
 * Entitet/bønne som representerer en beskrivelse av et produkt
 */
public class Description {

	private DescriptionId id;
	private String text;
	private Product product;
	
	/**
	 * Tom konstruktør, tilordner 'null' til alle feltvariabler
	 */
	public Description() {
		this(null,null,null);
	}
	
	/**
	 * Konstruktør som tilordner verdier til feltvariablene
	 * @param id Beskrivelsens identifikasjon
	 * @param text Beskrivelse på aktuelt produkt
	 * @param product Aktuelt produkt
	 */
	public Description(DescriptionId id, String text, Product product) {
		this.id = id;
		this.text = text;
		this.product = product;
	}

	public DescriptionId getId() {
		return id;
	}

	public void setId(DescriptionId id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	public Product getProduct() {
		return product;
	}
	
	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
