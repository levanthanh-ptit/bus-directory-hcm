package com.boot.api.bus.repository.jpa;

import java.util.List;
import java.util.UUID;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
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
	public void save(Bus bus) {
		Session session = this.sessionFactory.getCurrentSession();
		UUID uuid = UUID.randomUUID();
		bus.setId(uuid.toString());	
		session.save(bus);
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

	@Override
	public Bus findByRouteNumber(int num) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM Bus WHERE number =:num", Bus.class).setParameter("num", num).getSingleResult();
	}

}
