package com.boot.api.bus.compare;

import java.util.Comparator;

import com.boot.api.bus.entity.Bus;

public class CompareNumber implements Comparator<Bus> {

	@Override
	public int compare(Bus o1, Bus o2) {
		if(o1.getNumber()==o2.getNumber())  
			return 0;  
			else if(o1.getNumber()>o2.getNumber())  
			return 1;  
			else  
			return -1; 
	}
	
}
