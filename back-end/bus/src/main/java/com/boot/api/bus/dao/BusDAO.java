package com.boot.api.bus.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import com.boot.api.bus.entity.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class BusDAO {
	@Autowired
	private SessionFactory sessionFactory;

	public BusDAO() {
	}

	public void save(final Bus bus) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(bus);
	}

	public List<Bus> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM Bus", Bus.class).getResultList();
	}

	public Bus findById(long id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(Bus.class, id);
	}

	public void delete(final Bus bus) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(bus);
	}
}
