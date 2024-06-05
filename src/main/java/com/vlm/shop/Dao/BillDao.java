package com.vlm.shop.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.vlm.shop.Entity.Bill;

public interface BillDao extends JpaRepository<Bill, Integer> {

	List<Bill> getAllBills();

	List<Bill> getBillByUserName(@Param("username") String username);
	
	

}
