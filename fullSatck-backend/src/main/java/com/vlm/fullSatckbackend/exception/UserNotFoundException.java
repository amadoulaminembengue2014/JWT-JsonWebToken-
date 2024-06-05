package com.vlm.fullSatckbackend.exception;

public class UserNotFoundException extends RuntimeException {
	
	public UserNotFoundException(Long id) {
		super("Could not found the user with id"+id);
	}
	
	private static final long serialVersionUID = 1L;

}
