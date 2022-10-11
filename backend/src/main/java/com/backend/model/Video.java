package com.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "t_video")

public class Video {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
    @Column
    @NotBlank
    private String title;
    
    @Column
    @NotBlank
    private String description;
    
    @Column
    @NotBlank
    private String image;
    
    @Column
    private Integer duration;  
    
//  @JsonManagedReference 
	@ManyToMany
	@JoinTable(
	  name = "category_videos",
	  joinColumns = @JoinColumn(name = "video_id"),
	inverseJoinColumns = @JoinColumn(name = "category_id"))
	private List<Category> categories;
	
    @JsonBackReference
	@ManyToMany(mappedBy = "videos", cascade = CascadeType.PERSIST)
	private List<User> users;
    
//  TODO
//  @Column
//  private String tag  
    
    
	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}	
	
	public Video(long id, String title, String description, String image, Integer duration, List<Category> categories, List<User> users) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
		this.duration = duration;
		this.categories = categories;
		this.users = users;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

}
