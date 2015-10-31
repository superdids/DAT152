package no.hib.dat152.models;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Handlevogn som holder på varer
 * @author Didrik, Lars-Jo, Ståle
 *
 */
public class MyAwesomeCart implements Serializable {

	private static final long serialVersionUID = 1L;
	private Map<Integer,CartItem> items;

	/**
	 * Tom Konstruktør, oppretter ny instans av HashMap-et
	 */
	public MyAwesomeCart() {
		this(new HashMap<Integer,CartItem>());
	}
	
	/**
	 * Konstruktør som gir verdier til aktuell feltvariabel
	 * @param items HashMap med assosiasjoner mellom produktnummer
	 * og varen
	 */
	public MyAwesomeCart(Map<Integer,CartItem> items) {
		this.items = items;
	}

	public Map<Integer, CartItem> getItems() {
		return items;
	}

	public void setItems(Map<Integer, CartItem> items) {
		this.items = items;
	}
	
	/**
	 * Øker vareantall av et gitt produkt med én
	 * @param productId Produktnøkkelen til produktet
	 */
	public void addCount(Integer productId) {
		CartItem item = items.get(productId);
		if(item == null) return;
		item.addAmount();
		items.put(productId, item);
	}
	
	/**
	 * Legger til et produkt i samlingen. Dersom produktet finnes
	 * fra før, vil det overskrives med nytt produkt
	 * @param productId Produktnøkkelen til produktet
	 * @param item Produktet som skal legges til
	 */
	public void addItem(Integer productId, CartItem item) {
		items.put(productId, item);
	}
	
	/**
	 * Sjekker om en nøkkel eksisterer i samlingen
	 * @param productId Produktnøkkelen til et produkt
	 * @return True om nøkkelen eksisterer, false ellers
	 */
	public boolean inCart(Integer productId) {
		return items.get(productId) != null;
	}
}
