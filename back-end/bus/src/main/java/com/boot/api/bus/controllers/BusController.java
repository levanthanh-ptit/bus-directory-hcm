package com.boot.api.bus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//import com.boot.api.bus.dao.BusDAO;
import com.boot.api.bus.entity.Bus;

import com.boot.api.bus.repository.jpa.JpaBusRepository;

@RestController
@RequestMapping(value = "/api")
public class BusController {

	@Autowired
//	private BusDAO busDAO;
	private JpaBusRepository jpaBusRepository;

	@RequestMapping(value = "/buses", method = RequestMethod.GET)
	public ResponseEntity<List<Bus>> findAll() {
		List<Bus> buses = jpaBusRepository.findAll();
		if (buses.isEmpty()) return new ResponseEntity<List<Bus>>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<List<Bus>>(buses, HttpStatus.OK);
	}

	@RequestMapping(value = "/buses/{id}", method = RequestMethod.GET)
	public ResponseEntity<Bus> findById(@PathVariable Long id) {
		Bus bus = jpaBusRepository.findById(id);
		if (bus == null) return new ResponseEntity<Bus>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Bus>(bus, HttpStatus.OK);
	}
	@RequestMapping(value = "/buses/route/{num}", method = RequestMethod.GET)
	public ResponseEntity<Bus> findByRouteNumber(@PathVariable int num) {
		Bus bus = jpaBusRepository.findByRouteNumber(num);
		if (bus == null) return new ResponseEntity<Bus>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Bus>(bus, HttpStatus.OK);
	}
	
	@PostMapping("/buses")
	public ResponseEntity<Bus> save(@RequestBody Bus bus) {
		jpaBusRepository.save(bus);
		return new ResponseEntity<Bus>(bus, HttpStatus.CREATED);
	}
	
}
