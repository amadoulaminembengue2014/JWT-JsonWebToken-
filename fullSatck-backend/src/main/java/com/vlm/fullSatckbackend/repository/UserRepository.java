package com.vlm.fullSatckbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vlm.fullSatckbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
