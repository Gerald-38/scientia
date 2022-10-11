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
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
    public List<User> getUserRepositories() {
        return userRepository.findAll();
    } 

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public boolean checkExistingUser(User user) {
		Optional<User> foundUser = Optional.ofNullable(userRepository.findByUsername(user.getUsername()));
		return foundUser.isPresent();
	}

	public User save(User user) {
		User newUser = new User();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRole(user.getRole());
		newUser.setVideos(user.getVideos());
		return userRepository.save(newUser);
	}
	
    public User getByUsername(String username) {
    	return userRepository.findByUsername(username);    	
    }
    
    public Boolean deleteById(Long id) {
        boolean isUserInDB;
        
        try {
          isUserInDB = userRepository.existsById(id);

          if (!isUserInDB) {
            return false;
          }
          userRepository.deleteById(id);
          return true;
          
        } catch (RuntimeException e) {
        	System.out.println(e.getLocalizedMessage());
          return false;
        }
    }
}