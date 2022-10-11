package com.backend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "username", nullable = false, unique = true)
    @NotBlank(message="Name must not be empty")
    @Size(min=2, max=40)
    private String username;
    
    @Column
    @NotBlank(message="Password must not be empty")
//  @JsonIgnore
    private String password;
    
    @Column(columnDefinition = "varchar(255) default 'user'")
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

