package com.backend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "username", nullable = false, unique = true)
    private String username;
    
    @Column
//  @JsonIgnore
    private String password;
    
    @Column
//  @Column
    private String role;
    
//  @JsonManagedReference 
	@ManyToMany
	@JoinTable(
	  name = "video_users",
	  joinColumns = @JoinColumn(name = "user_id"),
	  inverseJoinColumns = @JoinColumn(name = "video_id"))
	private List<Video> videos;
	
	
    public User(long id, String username, String password, String role, List<Video> videos) {
	super();
	this.id = id;
	this.username = username;
	this.password = password;
	this.role = role;
	this.videos = videos;
}

	public User() {
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
        return username;
    }
    
    public long getId() {
        return id;
    }
    
    public long setId() {
        return id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}  
}

