package com.backend.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.User;
import com.backend.model.Video;
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
	
  
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<User> getUserDaos(Model model) {
        List<User> users = jwtUserDetailService.getUserRepositories();
        model.addAttribute("userRepositories", users);
        return users;
    }
    
    @GetMapping("/user")
    public ResponseEntity<User> getUSerByUsername(@RequestParam String username) {
        return ResponseEntity.ok(jwtUserDetailService.getByUsername(username));
    }
    
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
      Boolean isMovieDeleted = jwtUserDetailService.deleteById(id);
      
      if (!isMovieDeleted) {
        return "error";
      }
	return null;
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setUsername(user.getUsername());
        currentUser.setPassword(user.getPassword());
        currentUser.setRole(user.getRole());
        currentUser.setVideos(user.getVideos());
        currentUser = userRepository.save(user);
        return ResponseEntity.ok(currentUser);
    } 
    
    @GetMapping("get/videos/user")
    public ResponseEntity<Object> getVideosByUser(@RequestParam String userName) {
    	
    	final Optional<User> optionalUser = Optional.ofNullable(userRepository.findByUsername(userName));
    	List<Video> videos;
    	
    	if (optionalUser.isPresent()) {
    		
    		videos = optionalUser.get().getVideos();
    		
    		if (videos.isEmpty()) {
    			return ResponseEntity.ok().body("Aucun contenu trouvé");
    		}
    		
    		return ResponseEntity.ok().body(videos);
    	}
    	
    	return ResponseEntity.notFound().build();    
    }
}