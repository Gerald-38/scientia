package com.scientia.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Entity (name = "T_USER")
public class User {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	@NotNull(message = "Le nom ne peut pas être nul")
	@Column(name = "name")
	private String name;

	
    @NotBlank
    @NotNull(message = "Le prénom ne peut pas être nul")
    @Column(name = "first_name")
    private String firstName;
    
	@NotBlank
	@NotNull(message = "Le role ne peut pas être nul")
	@Column(name = "role")
	private String role;
    
    @NotBlank(message = "Email is mandatory")
    private String email;
    
    
//    @JsonBackReference
//	@ManyToMany(mappedBy = "users", cascade = CascadeType.ALL)
//    private List<Video> videos;
    
    
    // CONSTRUCTORS
    
	public User() {

	}

	public User(long id, String name, String firstName, String role, String email, List<Video> videos) {
		super();
		this.id = id;
		this.name = name;
		this.firstName = firstName;
		this.role = role;
		this.email = email;
//		this.videos = videos;
	}
	
	
	// GETTERS AND SETTERS

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

//	public List<Video> getVideos() {
//		return videos;
//	}
//
//	public void setVideos(List<Video> videos) {
//		this.videos = videos;
//	}
	
	

	
	



}
