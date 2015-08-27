package no.hib.dat152.resource;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class EMFListener
 *
 */
@WebListener
public class EMFListener implements ServletContextListener {

	private static EntityManagerFactory factory;

	public EMFListener() {

	}

	/**
	 * @see ServletContextListener#contextDestroyed(ServletContextEvent)
	 */
	public void contextDestroyed(ServletContextEvent arg0)  { 
		factory.close();
	}

	/**
	 * @see ServletContextListener#contextInitialized(ServletContextEvent)
	 */
	public void contextInitialized(ServletContextEvent arg0)  { 
		factory = Persistence.createEntityManagerFactory("a");
	}

	public static EntityManagerFactory getFactory() {
		return factory;
	}

}