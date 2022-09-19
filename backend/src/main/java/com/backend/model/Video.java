package com.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_video")

public class Video {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
    @Column
    private String title;
    
    @Column
    private String description;
    
    @Column
    private String image;
    
//    @Column
//    private Integer duration;  
    


//  TODO
//  @Column
//  private String catégorie
    
//  TODO
//  @Column
//  private String tag  
    
    
	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Video(long id, String title) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
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
	
	
	
    
    



}
