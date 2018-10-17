package com.boot.api.bus.repository;

import java.util.List;

import com.boot.api.bus.entity.Stop;

public interface IStopRepository {
	public void save(final Stop stop);

	public Stop findById(String id);

	public void delete(final Stop stop);

	public List<Stop> filterByRouteNumber(int num);
}
