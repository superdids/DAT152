package no.hib.dat152.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import no.hib.dat152.dao.MDAO;
import no.hib.dat152.model.Member;
import no.hib.dat152.model.Updates;
import no.hib.dat152.utils.DAOException;

public class MDAOImpl implements MDAO {

  public void setupDB() {
    try (
        Connection conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
        Statement st = conn.createStatement();
        ){
      try {
        st.executeUpdate("create schema Memberlist");
        System.out.println("Schema Memberlist was created.");
      } catch (Exception e) {
        System.out.println(e.toString());
      }

      try {
        st.executeUpdate("create table Memberlist.Member ("
            + "memberId SMALLINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
            + "firstname VARCHAR(64) NOT NULL,"
            + "lastname VARCHAR(64) NOT NULL,"
            + "address VARCHAR(64) NOT NULL,"
            + "phone VARCHAR(64) NOT NULL,"
            + "PRIMARY KEY (memberId))");
        System.out.println("Tabel Memberlist.Member was created.");
        st.executeUpdate("INSERT INTO Memberlist.Member (firstname,lastname,address,phone) VALUES ('Ole','Olsen','Olsenbakken','')");
        st.executeUpdate("INSERT INTO Memberlist.Member (firstname,lastname,address,phone) VALUES ('Per','Persen','Persenbakken 77','1234546567')");
        st.executeUpdate("INSERT INTO Memberlist.Member (firstname,lastname,address,phone) VALUES ('Anne','Annesen','Annesvingen 44','6587655458')");
      } catch (Exception e) {
        System.out.println(e.toString());
      }

      try {
        st.executeUpdate("CREATE TABLE Memberlist.Log ("
            + "logId SMALLINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
            + "memberId SMALLINT NOT NULL,"
            + "event CHAR(7),"
            + "PRIMARY KEY (logId))");
        st.executeUpdate("CREATE INDEX memberId_index ON Memberlist.Log (memberId)");

        System.out.println("Tabel Memberlist.Log was created.");
      } catch (Exception e) {
        System.out.println(e.toString());
      }

      try (
          ResultSet rs = st.executeQuery("SELECT memberId,firstname,lastname,phone FROM Memberlist.Member");
          ) {
        while (rs.next()) {
          System.out.println(rs.getString("MEMBERID") + ":" + rs.getString("firstname") + ":" + rs.getString("lastname") + ":" + rs.getString("phone"));
        }
      } catch (Exception e) {
        System.out.println(e.toString());
      }

    } catch (Exception e) {
      System.out.println(e.toString());
    }
  }

  public Integer newMember(Member member) throws DAOException {
    Connection conn = null;
    PreparedStatement ps = null;
    Statement st = null;
    ResultSet rs = null;
    Exception daoE=null;
    Integer memberId = null;

    try {
      conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
      conn.setAutoCommit(false);

      String SQL = "INSERT INTO Memberlist.Member (firstname,lastname,address,phone)";
      SQL = SQL + " VALUES (?,?,?,?)";
      ps = conn.prepareStatement(SQL,new String[] {"MEMBERID"});
      ps.setString(1, member.getFirstname());
      ps.setString(2, member.getLastname());
      ps.setString(3, member.getAddress());
      ps.setString(4, member.getPhone());
      int count = ps.executeUpdate();
      if (count != 1) throw new DAOException("Oppdatering a medlem feilet."); 

      // Henter ut id til nytt medlem
      rs = ps.getGeneratedKeys();
    //  st = conn.createStatement();
    //  rs = st.executeQuery("SELECT LAST_INSERT_ID() AS memberId");
      if (! rs.next()) throw new DAOException("Feil med DAO");
      memberId = rs.getInt(1);

      // Oppdaterer logg
      SQL = "INSERT INTO Memberlist.Log (memberId,event) VALUES (IDENTITY_VAL_LOCAL(),'new')";
      st = conn.createStatement();
      count = st.executeUpdate(SQL);
      if (count != 1) throw new DAOException("Oppdatering av logg feilet.");

      conn.commit();
    } catch (Exception e) {
      daoE=e;
    } finally {
      DatabaseHelper.r(conn);
      DatabaseHelper.close(ps);
      DatabaseHelper.close(st);
      DatabaseHelper.close(rs);
      DatabaseHelper.close(conn);
      if (daoE != null) throw new DAOException(daoE);
    }
    return memberId;
  }

  public void updateMember(Member member) throws DAOException {
    Connection conn = null;
    PreparedStatement ps = null;
    PreparedStatement ps2 = null;
    Exception daoE=null;

    try {
      if (member.getMemberId() == null) throw new DAOException("Feil memberId");
      if (member.getMemberId() < 1) throw new DAOException("Feil memberId");
      conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
      conn.setAutoCommit(false);

      String SQL = "UPDATE Memberlist.Member set firstname=?,lastname=?,address=?,phone=?";
      SQL = SQL + " WHERE memberId=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, member.getFirstname());
      ps.setString(2, member.getLastname());
      ps.setString(3, member.getAddress());
      ps.setString(4, member.getPhone());
      ps.setInt(5, member.getMemberId());
      int count = ps.executeUpdate();

      if (count != 1) {
        /* Hva nå? Noen andre har slettet medlem. Kan legge medlem inn på nytt,
         * evt. sende exception.
         * Dersom medlem skal legges inn på nytt må vi først sjekke om medlem finnes og
         * låse rekken.
         */
        throw new DAOException("Innsetting av medlem feilet.");
      }

      // Oppdaterer logg
      SQL = "INSERT INTO Memberlist.Log (memberId,event) VALUES (?,'changed')";

      ps2 = conn.prepareStatement(SQL);
      ps2.setInt(1, member.getMemberId());
      count = ps2.executeUpdate();
      if (count != 1) throw new DAOException("Oppdatering av logg feilet.");
      conn.commit();
    } catch (Exception e) {
      daoE=e;
    } finally {
      DatabaseHelper.r(conn);
      DatabaseHelper.close(ps);
      DatabaseHelper.close(ps2);
      DatabaseHelper.close(conn);
      if (daoE != null) throw new DAOException(daoE);
    }
  }

  public void deleteMember(int memberId) throws DAOException {

    Connection conn = null;
    PreparedStatement ps = null;
    PreparedStatement ps2 = null;
    Exception daoE = null;

    try {
      conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
      conn.setAutoCommit(false);

      String SQL = "DELETE FROM Memberlist.Member WHERE memberId=?";
      ps = conn.prepareStatement(SQL);
      ps.setInt(1, memberId);
      int count = ps.executeUpdate();

      if (count != 1) throw new DAOException("Sletting feilet.");
      // Oppdaterer logg
      SQL = "INSERT INTO Memberlist.Log (memberId,event) VALUES (?,'deleted')";

      ps2 = conn.prepareStatement(SQL);
      ps2.setInt(1, memberId);
      count = ps2.executeUpdate();
      if (count != 1)  throw new DAOException("Oppdatering av logg feilet.");
      conn.commit();
    } catch (Exception e) {
      daoE = e;
    } finally {
      DatabaseHelper.r(conn);
      DatabaseHelper.close(ps);
      DatabaseHelper.close(ps2);
      DatabaseHelper.close(conn);
      if (daoE != null) throw new DAOException(daoE);
    }
  }

  public Updates getUpdates(int logId) throws DAOException {
    Updates updates = new Updates();
    if (logId < 0) {
      updates = getAllMembers();
    } else {
      updates = getMembers(logId);
    }

    return updates;
  }

  private Updates getMembers(int logId) throws DAOException {
    Connection conn = null;
    Statement stAll = null;
    PreparedStatement psMId = null;
    ResultSet rsMId = null;

    PreparedStatement psH = null;
    ResultSet rsH = null;

    PreparedStatement psM = null;
    ResultSet rsM = null;

    Exception daoE=null;

    Updates updates=null;
    try {
      conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
      conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);
      stAll = conn.createStatement();

      // Må finnes siste oppslag i logg for hvert medlem
      //String SQL = "SELECT memberId FROM Log WHERE logId>? GROUP BY memberId";
      String SQL = "SELECT DISTINCT memberId FROM Memberlist.Log where logId > ?";
      psMId = conn.prepareStatement(SQL);
      // SQL = "SELECT event FROM Log WHERE memberId=?";
      String SQLh = "SELECT event FROM Memberlist.Log WHERE memberId=?  ORDER BY logId DESC";
      psH = conn.prepareStatement(SQLh);
      // Derby mangler LIMIT
      psH.setMaxRows(1);

      String SQLm = "SELECT firstname,lastname,address,phone FROM Memberlist.Member";
      SQLm = SQLm + " WHERE memberId=?";
      psM = conn.prepareStatement(SQLm);

      List<Member> newMembers = new ArrayList<Member>();
      List<Member> updatedMembers = new ArrayList<Member>();
      List<Integer> deletedMembers = new ArrayList<Integer>();

      psMId.setInt(1, logId);
      rsMId = psMId.executeQuery();
      int memberId;
      while (rsMId.next()) {
        memberId = rsMId.getInt("MEMBERID");
        psH.setInt(1, memberId);
        rsH = psH.executeQuery();
        rsH.next();					
        String event = rsH.getString("event").trim();
        if (event.equals("deleted")) {
          deletedMembers.add(memberId);
        } else {
          psM.setInt(1, memberId);
          rsM = psM.executeQuery();
          rsM.next();
          Member member = new Member();
          member.setMemberId(memberId);
          member.setFirstname(rsM.getString("firstname"));
          member.setLastname(rsM.getString("lastname"));
          member.setAddress(rsM.getString("address"));
          member.setPhone(rsM.getString("phone"));
          if (event.equals("new")) {
            newMembers.add(member);
          } else if (event.equals("changed")) {
            updatedMembers.add(member);
          }
        }
      }
      updates = new Updates();

      int logIdLast = getMaxLogId(stAll,rsMId);
      updates.setLogId(logIdLast);

      if (newMembers.size()>0) {
        updates.setNewMembers(newMembers);
      }
      if (updatedMembers.size()>0) {
        updates.setUpdatedMembers(updatedMembers);
      }
      if (deletedMembers.size()>0) {
        updates.setDeletedMembers(deletedMembers);
      }
    } catch (Exception e) {
      daoE = e;
    } finally {
      DatabaseHelper.r(conn);
      DatabaseHelper.close(rsM);
      DatabaseHelper.close(rsH);
      DatabaseHelper.close(rsMId);
      DatabaseHelper.close(stAll);
      DatabaseHelper.close(psMId);
      DatabaseHelper.close(psH);
      DatabaseHelper.close(psM);
      DatabaseHelper.close(conn);
      if (daoE != null) throw new DAOException(daoE);
    }
    return updates;
  }

  private Updates getAllMembers() throws DAOException {
    Connection conn = null;
    Statement st = null;
    ResultSet rs = null;
    Updates updates=null;
    Exception daoE=null;

    try {
      conn = DatabaseHelper.getConnection("java:comp/env/jdbc/DAT152_Memberlist");
      conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);

      st = conn.createStatement();
      updates = getAll(st,rs);
    } catch (Exception e) {
      daoE = e;
    } finally {
      DatabaseHelper.r(conn);
      DatabaseHelper.close(st);
      DatabaseHelper.close(rs);
      DatabaseHelper.close(conn);
      if (daoE != null) throw new DAOException(daoE);
    }
    return updates;
  }

  private Updates getAll(Statement st,ResultSet rs) throws SQLException {
    Updates updates = new Updates();
    String SQL = "SELECT memberId,firstname,lastname,address,phone FROM Memberlist.Member";
    rs = st.executeQuery(SQL);

    List<Member> newMembers = new ArrayList<Member>();
    while (rs.next()) {
      Member member = new Member();
      member.setMemberId(rs.getInt("MEMBERID"));
      member.setFirstname(rs.getString("firstname"));
      member.setLastname(rs.getString("lastname"));
      member.setAddress(rs.getString("address"));
      member.setPhone(rs.getString("phone"));
      newMembers.add(member);
    }

    int logIdLast = getMaxLogId(st,rs);
    updates.setLogId(logIdLast);

    if (newMembers.size() > 0) {
      updates.setNewMembers(newMembers);
    }
    return updates;
  }

  private int getMaxLogId(Statement st,ResultSet rs) throws SQLException {
    int logIdLast;
    String SQL = "SELECT MAX(logId) AS logId FROM Memberlist.Log";
    rs = st.executeQuery(SQL);
    if (rs.next()) {
      logIdLast=rs.getInt("logId");
    } else {
      logIdLast=0;
    }
    return logIdLast;
  }
}
