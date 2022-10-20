package com.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {	
	Optional<Category> findById(Long id);
	Optional<Category> findByName(String name);
}
