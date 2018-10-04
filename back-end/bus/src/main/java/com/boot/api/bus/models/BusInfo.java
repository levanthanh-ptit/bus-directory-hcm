package com.boot.api.bus.models;

public class BusInfo {
	private long id;
	private int number;
	private String name;
	private String description;
	private String forwardRoute;
	private String backRoute;
	private int ticketPrice;
	
	public BusInfo() {}
	public BusInfo(long id, int number, String name, String description, String forwardRoute, String backRoute) {
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
