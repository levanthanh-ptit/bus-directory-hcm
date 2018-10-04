package com.boot.api.bus.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BUS")
public class Bus {
	@Id
	@GeneratedValue
	@Column(name = "id", nullable = false)
	private long id;

	@Column(name = "number", nullable = false)
	private int number;

	@Column(name = "name", length = 50, nullable = false)
	private String name;

	@Column(name = "description", length = 50, nullable = true)
	private String description;

	@Column(name = "forwardRoute", length = 500, nullable = false)
	private String forwardRoute;

	@Column(name = "backRoute", length = 500, nullable = false)
	private String backRoute;
	
	@Column(name= "ticketPrice", nullable = false)
	private int ticketPrice;
	
	public Bus() {
	}

	public Bus(long id, int number, String name, String description, String forwardRoute, String backRoute) {
		this.id = id;
		this.number = number;
		this.name = name;
		this.description = description;
		this.forwardRoute = forwardRoute;
		this.backRoute = backRoute;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getForwardRoute() {
		return forwardRoute;
	}

	public void setForwardRoute(String forwardRoute) {
		this.forwardRoute = forwardRoute;
	}

	public String getBackRoute() {
		return backRoute;
	}

	public void setBackRoute(String backRoute) {
		this.backRoute = backRoute;
	}

	public int getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(int ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

}
