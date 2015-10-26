package no.hib.dat152.util;

public class Validator {

	public static String validString(String parameter) {
		return parameter != null ? parameter : "null";
	}
}
