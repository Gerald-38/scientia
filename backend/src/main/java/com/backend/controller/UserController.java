package com.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.UserDao;
import com.backend.repository.UserDaoRepository;
import com.backend.service.JwtUserDetailsService;



@RestController
@CrossOrigin()
@RequestMapping("/users")
public class UserController {
	
	
    @Autowired
    private UserDaoRepository userDaoRepository;
    
    @Autowired
    private JwtUserDetailsService jwtUserDetailService;    
	
    @RequestMapping(value = "/greeting", method = RequestMethod.GET)
    public String getEmployees() {
        return "Welcome!";
    }
    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<UserDao> getUserDaos(Model model) {
        List<UserDao> userDaos = jwtUserDetailService.getUserDaos();
        model.addAttribute("userDaos", userDaos);
        return userDaos;
    }
}