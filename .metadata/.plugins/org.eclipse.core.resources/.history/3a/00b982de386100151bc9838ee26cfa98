package no.hib.dat152.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Member {
	private String firstname;
	private String lastname;
	private String address="";
	private String phone="";
  private Integer memberId=null;
	
	public Member() {}
	
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname.trim();
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname.trim();
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address.trim();
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone.trim();
	}
	public Integer getMemberId() {
		return memberId;
	}
	public void setMemberId(Integer memberId) {
		this.memberId = memberId;
	}

	@Override
	public String toString() {
		return "Member [firstname=" + firstname + ", lastname=" + lastname + ", address=" + address + ", phone=" + phone
				+ ", memberId=" + memberId + "]";
	}
	
}
