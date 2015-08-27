package no.hib.dat152.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import no.hib.dat152.models.Car;
import no.hib.dat152.models.GenericDAO;
import no.hib.dat152.models.Person;

// Plain old Java Object it does not extend as class or implements 
// an interface

// The class registers its methods for the HTTP GET request using the @GET annotation. 
// Using the @Produces annotation, it defines that it can deliver several MIME types,
// text, XML and HTML. 

// The browser requests per default the HTML MIME type.

//Sets the path to base URL + /hello
@Path("/hello")
public class Hello {


	@Path("get/{id}")
	@GET
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public Person doMe(@PathParam("id") Integer id) {
		if(id == null) throw new WebApplicationException(Response.Status.NOT_FOUND);
		GenericDAO<Person> dao = new GenericDAO<Person>(EMFListener.getFactory(), Person.class);
		Person p = dao.readById(id);
		System.out.println("a");
		List<Car> c = p.getCars();
		System.out.println("b");
		if(c != null)
			for(Car a : c) System.out.println(a.getId()+" "+a.getBrand()+" "+a.getModel());
		else 
			System.out.println("Empty");
		//		System.out.println(p.getId() + " " + p.getName() + " " + p.getAge());

		return p;
	}


	@Path("list/{id}")
	@GET
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public Car doStuff(@PathParam("id") Integer id) {

		GenericDAO<Car> dao = new GenericDAO<Car>(EMFListener.getFactory(), Car.class);
		Car car = dao.readById(id);

		return car;
	}

	@Path("requestList") 
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> getPersons() {
		GenericDAO<Person> dao = new GenericDAO<Person>(EMFListener.getFactory(), Person.class);
		List<Person> persons = dao.readAll();
		if(persons != null) {
			for(Person p : persons) {
				List<Car> cars = p.getCars();
				if(cars != null) {
					System.out.println("Cars owned by " + p.getName());
					for(Car c : cars) {
						System.out.println("\t" + c.getId() + " " + c.getBrand() + " " + c.getModel());
					}
				}
			}
		}
		return persons;
	}

	@Path("createPerson")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Person createPerson(Person p) {
		GenericDAO<Person> dao = new GenericDAO<Person>(EMFListener.getFactory(), Person.class);
		boolean res = dao.create(p);
		return res ? p : null;
	}

} 