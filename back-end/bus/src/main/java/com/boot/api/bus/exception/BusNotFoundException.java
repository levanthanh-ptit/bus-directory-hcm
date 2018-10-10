package com.boot.api.bus.exception;

public class BusNotFoundException extends RuntimeException {

	public BusNotFoundException(Long id) {
		super("Could not find Bus " + id);
	}
}