package no.hib.dat152.models;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

public class GenericDAO<T> {

	private EntityManagerFactory factory;
	private Class<T> entity;
	private String customSelectQuery;
	
	public GenericDAO(EntityManagerFactory factory,  Class<T> entity) {
		this.factory = factory;
		this.entity = entity;
		customSelectQuery = "SELECT t FROM "+ entity.getSimpleName() + " t";
	}
	
	public boolean create(T item) {
		EntityManager em = factory.createEntityManager();
		EntityTransaction et = em.getTransaction();
		boolean created = false;
		
		try {
			et.begin();
			em.persist(item);
			et.commit();
			created = true;
		} catch(Exception e) {
			created = false;
			if(et != null) et.rollback();
			System.err.println("[GenericDAO]: create "+ entity.getSimpleName());
		} finally {
			if(em != null) em.close();
		}
		return created;
	}

	public T readById(Object id) {
		EntityManager em = factory.createEntityManager();
		EntityTransaction et = em.getTransaction();
		T result = null;

		try {
			et.begin();
			result = em.find(entity, id);
			et.commit();
		} catch(Exception e) {
			result = null;
			if(et != null) et.rollback();
			System.err.println("[GenericDAO]: findById " + entity.getSimpleName());
		} finally {
			if(em != null) em.close();
		}

		return result;
	}
	
	@SuppressWarnings("unchecked")
	public List<T> readAll() {
		EntityManager em = factory.createEntityManager();
		EntityTransaction et = em.getTransaction();
		List<T> result = null;
		
		try {
			et.begin();
			Query q = em.createQuery(customSelectQuery);
			result = q.getResultList();
			et.commit();
		} catch(Exception e) {
			result = null;
			if(et != null) et.rollback();
			System.err.println("[GenericDAO]: findAll " + entity.getSimpleName());
		} finally {
			if(em != null) em.close();
		}
		
		return result != null ? result.size() > 0 ? result : null : null;
	}
	
	@SuppressWarnings("unchecked")
	public List<T> readAllByCriterion(String whereQuery, Map<String, Object> parameters) {
		EntityManager em = factory.createEntityManager();
		EntityTransaction et = em.getTransaction();
		List<T> result = null;
		
		try{
			et.begin();
			Query q = em.createQuery(customSelectQuery + " "+ whereQuery);
			for(Entry<String, Object> entry : parameters.entrySet()) {
				q.setParameter(entry.getKey(),  entry.getValue());
			}
			result = q.getResultList();
			et.commit();
		} catch(Exception e) {
			result = null;
			if(et != null) et.rollback();
			System.err.println("[GenericDAO]: readAllByCriterion " + entity.getSimpleName());
		} finally {
			if(em != null) em.close();
		}
		
		return result != null ? result.size() > 0 ? result : null : null;
	}
}