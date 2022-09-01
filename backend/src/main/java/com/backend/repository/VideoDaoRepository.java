package com.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.VideoDao;


@Repository
public interface VideoDaoRepository extends JpaRepository<VideoDao, Long> {
	
	Optional<VideoDao> findById(Long id);
}
