package com.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);
//	Optional<User> findByUsername1(String username);	
//	Optional<User> findByName(String name);
// TODO : ELIMINER LE DOUBLON ENTRE LES METHODES
}