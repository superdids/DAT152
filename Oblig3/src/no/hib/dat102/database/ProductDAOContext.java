package no.hib.dat102.database;

import java.util.List;

import no.hib.dat152.util.ServletContext;

public class ProductDAOContext implements ProductDAO {

	
	
	@Override
	public Product create(Product p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product read(Integer primaryKey) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product update(Product p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(Integer primaryKey) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Product> readAll() {
		List<Product> products = ServletContext.fetchProductsFromContext();
		return products.size() > 0 ? products : null;	
	}
}
