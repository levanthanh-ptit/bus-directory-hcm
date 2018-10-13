package com.boot.api.bus.models;

public class StopInfo {
	private int StopId;
	private String Code;
	private String Name;
	private String StopType;
	private String Zone;
	private String Ward;
	private String AddressNo;
	private String Street;
	private String SupportDisability;
	private String Status;
	private double Lng;
	private double Lat;
	private String Search;
	private String Routes;

	public StopInfo() {
	};

	public StopInfo(int stopId, String code, String name, String stopType, String zone, String ward, String addressNo,
			String street, String supportDisability, String status, float lng, float lat, String search,
			String routes) {
		super();
		StopId = stopId;
		Code = code;
		Name = name;
		StopType = stopType;
		Zone = zone;
		Ward = ward;
		AddressNo = addressNo;
		Street = street;
		SupportDisability = supportDisability;
		Status = status;
		Lng = lng;
		Lat = lat;
		Search = search;
		Routes = routes;
	}

	public float getStopId() {
		return StopId;
	}

	public void setStopId(int stopId) {
		StopId = stopId;
	}

	public String getCode() {
		return Code;
	}

	public void setCode(String code) {
		Code = code;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getStopType() {
		return StopType;
	}

	public void setStopType(String stopType) {
		StopType = stopType;
	}

	public String getZone() {
		return Zone;
	}

	public void setZone(String zone) {
		Zone = zone;
	}

	public String getWard() {
		return Ward;
	}

	public void setWard(String ward) {
		Ward = ward;
	}

	public String getAddressNo() {
		return AddressNo;
	}

	public void setAddressNo(String addressNo) {
		AddressNo = addressNo;
	}

	public String getStreet() {
		return Street;
	}

	public void setStreet(String street) {
		Street = street;
	}

	public String getSupportDisability() {
		return SupportDisability;
	}

	public void setSupportDisability(String supportDisability) {
		SupportDisability = supportDisability;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public double getLng() {
		return Lng;
	}

	public void setLng(float lng) {
		Lng = lng;
	}

	public double getLat() {
		return Lat;
	}

	public void setLat(float lat) {
		Lat = lat;
	}

	public String getSearch() {
		return Search;
	}

	public void setSearch(String search) {
		Search = search;
	}

	public String getRoutes() {
		return Routes;
	}

	public void setRoutes(String routes) {
		Routes = routes;
	}

}
