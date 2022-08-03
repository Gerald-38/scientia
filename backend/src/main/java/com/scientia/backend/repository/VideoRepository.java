package com.scientia.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.scientia.backend.model.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
	Optional<Video> findById(Integer id);
	Optional<Video> findByTitle(String title);
}
