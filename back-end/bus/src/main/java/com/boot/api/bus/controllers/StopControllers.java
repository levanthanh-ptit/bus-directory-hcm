package com.boot.api.bus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.api.bus.entity.Stop;
import com.boot.api.bus.repository.jpa.JpaStopRepository;

@RestController
@RequestMapping(value = "/api")
public class StopControllers {

	@Autowired
	private JpaStopRepository jpaStopRepository;

	@GetMapping("/stops/route/{num}")
	public ResponseEntity<List<Stop>> filterByRouteNumber(@PathVariable int num) {
		List<Stop> stops = jpaStopRepository.filterByRouteNumber(num);
		if (stops.isEmpty())
			return new ResponseEntity<List<Stop>>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<List<Stop>>(stops, HttpStatus.OK);
	}

	@GetMapping("/stops/{id}")
	public ResponseEntity<Stop> findById(@PathVariable int id) {
		Stop stop = jpaStopRepository.findById(id);
		if (stop == null)
			return new ResponseEntity<Stop>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Stop>(stop, HttpStatus.OK);
	}

	@PostMapping("/stops")
	public ResponseEntity<Stop> save(@RequestBody Stop stop) {
		jpaStopRepository.save(stop);
		return new ResponseEntity<Stop>(stop, HttpStatus.CREATED);
	}
}
