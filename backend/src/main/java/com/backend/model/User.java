package com.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private String username;
    
    @Column
//    @JsonIgnore
    private String password;
    
    @Column(columnDefinition = "varchar(255) default 'user'")
//    @Column
    private String role;

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
    
    

}

