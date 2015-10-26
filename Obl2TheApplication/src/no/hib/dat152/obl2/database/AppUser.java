package no.hib.dat152.obl2.database;

public class AppUser {

	private String username; 
	private String passhash; 
	private String firstname;
	private String lastname;
	private String mobilephone;
	
	public AppUser(String username, String passhash, String firstname, 
			String lastname, String mobilephone) {
		this.username = username;
		this.passhash = passhash;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobilephone = mobilephone;
	}

	public String getUsername() {
		return username;
	}

	public String getPasshash() {
		return passhash;
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getMobilephone() {
		return mobilephone;
	}
	
	
	
}

