package com.boot.api.bus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.boot.api.bus.dao.BusDAO;
import com.boot.api.bus.entity.Bus;

@RestController
@RequestMapping(value = "/api")
public class MainController {

	@Autowired
	private BusDAO busDAO;

	@RequestMapping(value = "/buses", method = RequestMethod.GET)
	public List<Bus> findAll() {
		return busDAO.findAll();
	}

	@RequestMapping(value = "/buses/{id}", method = RequestMethod.GET)
	public Bus findById(@PathVariable Long id) {
		return busDAO.findById(id);
	}
	
	@RequestMapping(value = "/buses", method = RequestMethod.POST)
	public void save(@RequestBody Bus bus) {
		busDAO.save(bus);
	}
	
}
