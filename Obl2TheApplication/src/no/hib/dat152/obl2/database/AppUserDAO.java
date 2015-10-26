package no.hib.dat152.obl2.database;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.apache.commons.codec.digest.DigestUtils;

public class AppUserDAO {

  public AppUser getAuthenticatedUser(String username, String password) {

    String hashedPassword = generatePassHash(password);

    String sql = "SELECT * FROM SecOblig.AppUser" 
        + " WHERE username = '" + username + "'"
        + " AND passhash = '" + hashedPassword + "'";

    AppUser user = null;

    Connection c = null;
    Statement s = null;
    ResultSet r = null;

    try {        
      c = DatabaseHelper.getConnection();
      s = c.createStatement();       
      r = s.executeQuery(sql);

      if (r.next()) {
        user = new AppUser(
            r.getString("username"),
            r.getString("passhash"),
            r.getString("firstname"),
            r.getString("lastname"),
            r.getString("mobilephone")
            );
      }

    } catch (Exception e) {
      System.out.println(e);
    } finally {
      DatabaseHelper.closeConnection(r, s, c);
    }

    return user;
  }

  public void saveUser(AppUser user) {

    String sql = "INSERT INTO SecOblig.AppUser VALUES (" 
        + "'" + user.getUsername()  + "', "
        + "'" + user.getPasshash()  + "', "
        + "'" + user.getFirstname() + "', "
        + "'" + user.getLastname()  + "', "
        + "'" + user.getMobilephone() + "')";

    Connection c = null;
    Statement s = null;
    ResultSet r = null;

    try {        
      c = DatabaseHelper.getConnection();
      s = c.createStatement();       
      s.executeUpdate(sql);

    } catch (Exception e) {
      System.out.println(e);
    } finally {
      DatabaseHelper.closeConnection(r, s, c);
    }
  }

  public String generatePassHash(String password) {
    return DigestUtils.md5Hex(password);
  }

}

