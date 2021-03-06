package no.hib.dat152;

public class Klasse {


	
	public static boolean validatePhone(String p) {
		return p != null && p.matches("[0-9]{8}");
	}
	
	public static boolean validateFirstName(String n) {
		return n != null && n.matches("[a-zA-ZøæåØÆÅ]{3,50}");
	}
	
	/**
	 * Passordkriterier: minst en stor og liten bokstav, samt minst ett
	 * siffer. 6-13 tegn totalt.
	 * @param p Passordet soms skal valideres
	 * @return true om testen passerer, false ellers
	 */
	public static boolean validatePassword(String p) {
		return p != null && p.matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{4,8}$");
	}
}
