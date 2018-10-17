package com.boot.api.bus.repository.jpa;

import java.util.List;
import java.util.UUID;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.boot.api.bus.entity.Stop;
import com.boot.api.bus.repository.IStopRepository;

@Repository
@Transactional
public class JpaStopRepository implements IStopRepository {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void save(Stop stop) {
		Session session = this.sessionFactory.getCurrentSession();
		UUID uuid = UUID.randomUUID();
		stop.setId(uuid.toString());	
		session.save(stop);
	}

	@Override
	public Stop findById(String id) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.get(Stop.class, id);
	}

	@Override
	public void delete(Stop stop) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(stop);
	}

	@Override
	public List<Stop> filterByRouteNumber(int num) {
		Session session = this.sessionFactory.getCurrentSession();
		return session.createQuery("FROM Stop WHERE route =:num", Stop.class).setParameter("num", num).getResultList();
	}

}
