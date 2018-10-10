package com.boot.api.bus.repository.jpa;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.boot.api.bus.entity.Bus;
import com.boot.api.bus.repository.IBusRepository;

@Repository
@Transactional
public class JpaBusRepository implements IBusRepository {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean save(final Bus bus) {
		try {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(bus);
		return true;
		}
		catch(Exception e) {
			return false;			
		}
	}

	@Override
	public List<Bus> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM Bus", Bus.class).getResultList();
	}

	@Override
	public Bus findById(long id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(Bus.class, id);
	}

	@Override
	public void delete(final Bus bus) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(bus);
	}

}
