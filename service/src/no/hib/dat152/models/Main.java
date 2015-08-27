package no.hib.dat152.models;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {

	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("a");
		GenericDAO<Person> dao = new GenericDAO<Person>(emf, Person.class);
		Person p = dao.readById(1);
		System.out.println(p);
	}
}