package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.model.User;
//import com.backend.model.UserDto;
import com.backend.repository.UserRepository;
//import com.backend.repository.UserRepository;


import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;
	
//	@Autowired
//	private UserRepository userDaoRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
    public List<User> getUserDaos() {
        return userDao.findAll();
    } 

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public User save(User user) {
		User newUser = new User();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRole(user.getRole());	
		return userDao.save(newUser);
	}
	
    public User getByUsername(String username) {
    	return userDao.findByUsername(username);    	
    }
}