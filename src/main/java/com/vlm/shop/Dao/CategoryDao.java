package com.vlm.shop.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vlm.shop.Entity.Category;

public interface CategoryDao  extends JpaRepository<Category, Integer>{
	
	List<Category> getAllCategory();

}
