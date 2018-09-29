package com.boot.api.bus.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import com.boot.api.bus.models.*;

public class BusData {
	private static Map<Long,Bus> busData = new HashMap<Long, Bus>();
	private static Long idIndex = 3L;
	static {
		busData.put(1L, new Bus(1L,1,"Suoi tien - Q1","des none","XL Ha Noi - Dien Bien Phu - Nguyen Huu Canh","Nguyen Huu Canh - Dien Bien Phu - XL Ha Noi"));
		busData.put(2L, new Bus(2L,2,"A - D","ACBD","A - C - B - D","D - B - C - A"));
		busData.put(3L, new Bus(3L,3,"C - E","CAVE","C - A - V - E","E - V - A - C"));	
	}
	public static List<Bus> list(){
		return new ArrayList<Bus>(busData.values());
	}
	public static Bus create(Bus bus) {
		idIndex += idIndex;
		bus.setId(idIndex);
		busData.put(idIndex,bus);
		return bus;
	}
	public static Bus get(Long id) {
		return busData.get(id);
	}
	public static Bus update(Long id, Bus bus) {
		busData.put(id, bus);
		return bus;
	}
	public static Bus delete(Long id) {
		return busData.remove(id);
	}
}
