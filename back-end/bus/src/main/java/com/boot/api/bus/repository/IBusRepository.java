package com.boot.api.bus.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.boot.api.bus.entity.Bus;

@Repository
public interface IBusRepository {
	public void save(final Bus bus);

	public List<Bus> findAll();

	public Bus findById(String id);

	public void delete(final Bus bus);
	
	public Bus findByRouteNumber(int num);
}