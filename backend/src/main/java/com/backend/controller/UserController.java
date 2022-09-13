package com.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.User;
import com.backend.repository.UserRepository;
import com.backend.service.JwtUserDetailsService;


@RestController
@CrossOrigin()
@RequestMapping("/users")
public class UserController {
	
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private JwtUserDetailsService jwtUserDetailService;    
	
//    @RequestMapping(value = "/greeting", method = RequestMethod.GET)
//    public String getEmployees() {
//        return "Welcome!";
//    }
//    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<User> getUserDaos(Model model) {
        List<User> users = jwtUserDetailService.getUserDaos();
        model.addAttribute("userDaos", users);
        return users;
    }
    
    @GetMapping("/user")
    public ResponseEntity<User> getUSerByUsername(@RequestParam String username) {
        return ResponseEntity.ok(jwtUserDetailService.getByUsername(username));
    }  
}