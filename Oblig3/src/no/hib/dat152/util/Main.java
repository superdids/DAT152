package no.hib.dat152.util;

import java.util.Locale;

public class Main {
	public static void main(String[] args) {
		Locale l = new Locale("en", "US");
		if(l.getCountry().equals("")) System.err.println("FAIL");
		System.out.println(l);
	}
}
