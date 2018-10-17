	package com.boot.api.bus.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

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
	public ResponseEntity<Stop> findById(@PathVariable String id) {
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

	@GetMapping("/stops/getinbounds")
	public Object[] getStopsInBounds(@RequestParam("lat1") double lat1, @RequestParam("lng1") double lng1,
	@RequestParam("lat2") double lat2, @RequestParam("lng2") double lng2) {
		double resLng1, resLat1, resLng2, resLat2;
		if(lat1>lat2) {
			resLat1 = lat2;
			resLat2 = lat1;
		} else {
			resLat1 = lat1;
			resLat2 = lat2;
		}
		if(lng1>lng2) {
			resLng1 = lng2;
			resLng2 = lng1;
		} else {
			resLng1 = lng1;
			resLng2 = lng2;
		}
		
		String uri = "http://api.openfpt.vn/fbusinfo/businfo/getstopsinbounds/"+resLng1+"/"+resLat1+"/"+resLng2+"/"+resLat2;
//		System.out.println("####!!!! "+ uri);
		RestTemplate restTemplate = new RestTemplate();
//		add header
		HttpHeaders headers = new HttpHeaders();
//		add JSON format
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//		add api key
		headers.set("api_key", "4ee53bc169c3403a914c24625fe4ca38");
		HttpEntity entity = new HttpEntity(headers);
		ResponseEntity<Object[]> result = restTemplate.exchange(uri, HttpMethod.GET, entity, Object[].class);
		Object[] objects = result.getBody();
		return objects;
	}
}








