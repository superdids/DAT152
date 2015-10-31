package no.hib.dat102.database;

import java.util.List;

/**
 * Kontrakt som definerer oppførselen til et Data Access Object
 * som opererer på produkter i en gitt samling
 * @author Didrik, Lars-Jo, Ståle
 *
 */
public interface ProductDAO {

	/**
	 * Oppretter et nytt produkt
	 * @param p Produktet som skal opprettes
	 * @return Produktet, null dersom det skulle forekomme en feil
	 */
	public Product create(Product p);
	
	/**
	 * Henter et produkt med en gitt primærnøkkel
	 * @param primaryKey Primærnøkkelen som det søkes etter
	 * @return Produktet dersom primærnøkkelen assosieres til
	 * et produkt i samlingen, null ellers
	 */
	public Product read(Integer primaryKey);
	
	/**
	 * Oppdaterer et eksisterende produkt, eller oppretter
	 * om det ikke eksisterer
	 * @param p Produktet som skal oppdateres
	 * @return Produktet, null om det skulle forekomme en feil
	 */
	public Product update(Product p);
	
	/**
	 * Sletter et produkt med en gitt primærnøkkel
	 * @param primaryKey Primærnøkkelen som det søkes etter
	 * @return True om produktet ble fjernet fra samlingen, false ellers
	 */
	public boolean delete(Integer primaryKey);
	
	/**
	 * Henter alle produkter i samlingen
	 * @return Samling av produkter
	 */
	public List<Product> readAll();
}
