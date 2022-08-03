package com.scientia.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity (name = "T_CATEGORY")
public class Category {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	@Column(name = "name")
    private String name;
	
//    @JsonBackReference
//	@ManyToMany(mappedBy = "categories", cascade = CascadeType.ALL)
//    private List<Video> videos;
    
    
    // CONSTRUCTORS
    
	public Category() {

	}
	
	public Category(Long id, String name, List<Video> videos) {
		super();
		this.id = id;
		this.name = name;
//		this.videos = videos;
	}
    
    
    // GETTERS AND SETTERS
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public List<Video> getVideos() {
//		return videos;
//	}
//
//	public void setVideos(List<Video> videos) {
//		this.videos = videos;
//	}

}
