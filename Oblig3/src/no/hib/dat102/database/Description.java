package no.hib.dat102.database;

import java.io.Serializable;

/**
 * Entitet/bønne som representerer en beskrivelse av et produkt
 * @author Didrik, Lars-Jo, Ståle
 */
public class Description implements Serializable {

	private static final long serialVersionUID = 1L;
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