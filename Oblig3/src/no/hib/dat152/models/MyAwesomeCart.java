package no.hib.dat152.models;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


public class MyAwesomeCart implements Serializable {

	private static final long serialVersionUID = 1L;
	private Map<Integer,CartItem> items;
	
	public MyAwesomeCart() {
		this(new HashMap<Integer,CartItem>());
	}
	
	public MyAwesomeCart(Map<Integer,CartItem> items) {
		this.items = items;
	}

	public Map<Integer, CartItem> getItems() {
		return items;
	}

	public void setItems(Map<Integer, CartItem> items) {
		this.items = items;
	}
	
	public void addCount(Integer productId) {
		CartItem item = items.get(productId);
		if(item == null) return;
		item.addAmount();
		items.put(productId, item);
	}
	
	public void addItem(Integer productId, CartItem item) {
		items.put(productId, item);
	}
	
	public boolean inCart(Integer productId) {
		return items.get(productId) != null;
	}
}
