package no.hib.dat152.dao;

import no.hib.dat152.model.Member;
import no.hib.dat152.model.Updates;
import no.hib.dat152.utils.DAOException;

// http://tomee.apache.org/examples-trunk/rest-example/README.html
public interface MDAO {
  public void setupDB();
	public Integer newMember(Member member) throws DAOException ;
	public void updateMember(Member member) throws DAOException;
	public void deleteMember(int mId) throws DAOException;
	public Updates getUpdates(int logId) throws DAOException;
}
