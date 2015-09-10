package no.hib.dat152.model;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Updates {
	private Integer logId;
	
	private List<Member> newMembers;

	private List<Member> updatedMembers;

  private List<Integer> deletedMembers;

  private Boolean status=false;
    
  public Updates() {}
 
	public Boolean getStatus() {
      return status;
    }
    public void setStatus(Boolean status) {
      this.status = status;
    }
  public Integer getLogId() {
		return logId;
	}
	public void setLogId(Integer logId) {
		this.logId = logId;
	}
	public List<Member> getNewMembers() {
		return newMembers;
	}
	public void setNewMembers(List<Member> newMembers) {
		this.newMembers = newMembers;
	}
	public List<Member> getUpdatedMembers() {
    return updatedMembers;
  }

  public void setUpdatedMembers(List<Member> updatedMembers) {
    this.updatedMembers = updatedMembers;
  }

  public List<Integer> getDeletedMembers() {
		return deletedMembers;
	}
	public void setDeletedMembers(List<Integer> deletedMembers) {
		this.deletedMembers = deletedMembers;
	}
}