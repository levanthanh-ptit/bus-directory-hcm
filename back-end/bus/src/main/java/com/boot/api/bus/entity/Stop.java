package com.boot.api.bus.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stop")
public class Stop {

	@Id
	@Column(name = "id", nullable = false)
	private int id;
	
	@Column(name = "route", nullable = false)
	private int route;
	
	@Column(name = "name", length = 50, nullable = false)
	private String name;
	
	@Column(name = "lng", nullable = false)
	private double lng;
	
	@Column(name = "lat", nullable = false)
	private double lat;
	
	public Stop() {};
	
	public Stop(int id, int route, String name, double lng, double lat) {
		super();
		this.id = id;
		this.route = route;
		this.name = name;
		this.lng = lng;
		this.lat = lat;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRoute() {
		return route;
	}

	public void setRoute(int route) {
		this.route = route;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

}
