package no.hib.dat152.services;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import no.hib.dat152.dao.MDAO;
import no.hib.dat152.dao.jdbc.MDAOImpl;

public class MyContextListener implements ServletContextListener {

  @Override
  public void contextInitialized(ServletContextEvent arg0) {
    System.out.println("Application is started. The database will be created if it does not exist.");
    MDAO memberDAO = new MDAOImpl();
    memberDAO.setupDB();
  }

  @Override
  public void contextDestroyed(ServletContextEvent arg0) {
    System.out.println("Application was stopped.");    
  }
}
