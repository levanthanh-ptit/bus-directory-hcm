package com.boot.api.bus.repository.jpa;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.boot.api.bus.entity.Bus;
import com.boot.api.bus.repository.IBusRepository;

@Repository
public class JpaBusRepository implements IBusRepository {

	@PersistenceContext
    private EntityManager em;
	
	@Override
	public Collection<Bus> findByRouteNumber(String RouteNumber) throws DataAccessException {
		String queryString = "SELECT * FROM Bus WHERE RouteNumber = " + RouteNumber;
		 Query query = this.em.createQuery(queryString);
	        return query.getResultList();
	}

	@Override
	public Bus findById(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Bus bus) throws DataAccessException {
		// TODO Auto-generated method stub
		
	}

}
