package no.hib.dat152.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UpdatedMember {
  private Integer memberId;
  private Boolean status=false;
  
  public Integer getMemberId() {
    return memberId;
  }
  public void setMemberId(Integer memberId) {
    this.memberId = memberId;
  }
  public Boolean getStatus() {
    return status;
  }
  public void setStatus(Boolean status) {
    this.status = status;
  }
}
