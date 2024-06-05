package com.vlm.shop.Service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.vlm.shop.Wrapper.UserWrapper;

public interface UserService {

	ResponseEntity<String> signup(Map<String, String> requestMap);

	ResponseEntity<String> login(Map<String, String> requestMap);

	ResponseEntity<List<UserWrapper>> getAllUser();

	ResponseEntity<String> update(Map<String, String> requestMap);

	ResponseEntity<String> checkToken();

	ResponseEntity<String> changePassword(Map<String, String> requestMap);

	ResponseEntity<String> forgotPassword(Map<String, String> requestMap);

}
