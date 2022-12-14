package com.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.Video;


@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {	
	Optional<Video> findById(Long id);
	Optional<Video> findByTitle(String title);	
}
