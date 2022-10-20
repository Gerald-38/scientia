package com.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "t_category")
public class Category {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
    @Column(name = "name", nullable = false, unique = true)
    @NotBlank(message="Name must not be empty")
    @Size(min=2, max=40)
    private String name;
    
    @JsonBackReference
	@ManyToMany(mappedBy = "categories", cascade = CascadeType.PERSIST)
	private List<Video> videos;

	public Category(long id, String name, List<Video> videos) {
		super();
		this.id = id;
		this.name = name;
		this.videos= videos;
	}

	public Category() {
		super();
	}

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

	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}
}
