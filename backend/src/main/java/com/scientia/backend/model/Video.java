package com.scientia.backend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity (name = "T_VIDEO")
public class Video {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;  
    
    @Column(name = "image")
    private String image;  
    
//    @JsonManagedReference 
//	@ManyToMany
//	@JoinTable(
//	  name = "category_videos",
//	  joinColumns = @JoinColumn(name = "video_id"),
//	inverseJoinColumns = @JoinColumn(name = "category_id"))
//	private List<Category> categories;    
//    
//    @JsonManagedReference 
//	@ManyToMany
//	@JoinTable(
//	  name = "tag_videos",
//	  joinColumns = @JoinColumn(name = "video_id"),
//	inverseJoinColumns = @JoinColumn(name = "tag_id"))
//	private List<Tag> tags;
//    
//    @JsonManagedReference 
//	@ManyToMany
//	@JoinTable(
//	  name = "user_videos",
//	  joinColumns = @JoinColumn(name = "video_id"),
//	inverseJoinColumns = @JoinColumn(name = "user_id"))
//	private List<User> users;
    
    
    // CONSTRUCTORS
    
	public Video() {
		
	}
	
	public Video(Long id, String title, String description, String image, List<Category> categories, List<Tag> tags,
			List<User> users) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
//		this.categories = categories;
//		this.tags = tags;
//		this.users = users;
	}
	
	
	// GETTERS AND SETTERS

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

//	public List<Category> getCategories() {
//		return categories;
//	}
//
//	public void setCategories(List<Category> categories) {
//		this.categories = categories;
//	}
//
//	public List<Tag> getTags() {
//		return tags;
//	}
//
//	public void setTags(List<Tag> tags) {
//		this.tags = tags;
//	}
//
//	public List<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}
	
	

	
	
	
	
    


}
