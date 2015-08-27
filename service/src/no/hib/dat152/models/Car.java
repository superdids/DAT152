package no.hib.dat152.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
@Entity
//@JsonIgnoreProperties({"person"})	
public class Car {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private Integer model;
	private String brand;
	
	@ManyToOne
	@JoinColumn(name="possessor")
	private Person possessor;

	public Car() {
		
	}
	
	public Car(Integer id, Integer model, String brand) {
		this.id = id;
		this.model = model;
		this.brand = brand;
	}
	
	public Car(Integer id, Integer model, String brand, Person possessor) {
		this(id,model,brand);
		this.possessor = possessor;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getModel() {
		return model;
	}

	public void setModel(Integer model) {
		this.model = model;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Person getPossessor() {
		return possessor;
	}

	public void setPossessor(Person possessor) {
		this.possessor = possessor;
	}
}
