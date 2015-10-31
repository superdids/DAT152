package no.hib.dat152.models;

import java.io.Serializable;

import no.hib.dat102.database.Product;

/**
 * Bønne som 
 * @author Didrik
 *
 */
public class CartItem implements Serializable {

	private static final long serialVersionUID = 1L;
	private Product product;
	private Integer amount;
	private String description;
	
	public CartItem() {
		this(null,null,null);
	}
	
	public CartItem(Product product, Integer amount, String description) {
		this.product = product;
		this.amount = amount;
		this.description = description;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void addAmount() {
		amount++;
	}
}
