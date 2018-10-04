package com.boot.api.bus.repository;

import com.boot.api.bus.entity.Bus;
import java.util.Collection;
import org.springframework.dao.DataAccessException;

public interface IBusRepository {

	Collection<Bus> findByRouteNumber(String RouteNumber) throws DataAccessException;

	Bus findById(int id) throws DataAccessException;

	void save(Bus bus) throws DataAccessException;

}
