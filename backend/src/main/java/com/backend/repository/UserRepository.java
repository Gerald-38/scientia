package com.backend.repository;
import org.springframework.data.repository.CrudRepository;

import com.backend.model.UserDao;
import com.backend.model.UserDto;
public interface UserRepository extends CrudRepository<UserDao, Integer> {
    UserDao findByUsername(String username);

	UserDto save(UserDto newUser);
}