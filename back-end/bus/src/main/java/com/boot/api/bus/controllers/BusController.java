package com.boot.api.bus.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.boot.api.bus.models.*;

@RestController
@RequestMapping(value="api/")
public class BusController {

	@RequestMapping(value = "buses", method = RequestMethod.GET)
	public List<Bus> list(){
		return BusData.list();
	}
	@RequestMapping(value="buses/{id}", method = RequestMethod.GET)
	public Bus get(@PathVariable Long id) {
		return BusData.get(id);
	}
	@RequestMapping(value="buses/{id}", method = RequestMethod.POST)
	public Bus create(@RequestBody Bus bus) {
			return BusData.create(bus);
	}
	@RequestMapping(value="buses/{id}", method = RequestMethod.PUT)
	public Bus update(@PathVariable Long id,@RequestBody Bus bus) {
		return BusData.update(id, bus);
	}
	@RequestMapping(value ="buses/{id}", method = RequestMethod.DELETE)
	public Bus delete(@PathVariable Long id) {
		return BusData.delete(id);
	}
}
