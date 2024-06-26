package com.vlm.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vlm.jwt.entity.JwtRequest;
import com.vlm.jwt.entity.JwtResponse;
import com.vlm.jwt.service.JwtService;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class JwtController {
	
	@Autowired
	private JwtService jwtService;
	
	@PostMapping({"/authenticate"})
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		return jwtService.createJwtToken(jwtRequest);
	}

}
