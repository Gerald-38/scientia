package com.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.UserDao;

@Repository
public interface UserDaoRepository extends JpaRepository<UserDao, Long> {

}