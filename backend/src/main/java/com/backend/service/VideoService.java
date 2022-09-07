package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.Video;
import com.backend.repository.VideoRepository;


@Service
public class VideoService {
	
	@Autowired
	private VideoRepository videoRepository;
	
    public List<Video> getVideoDaos() {
        return videoRepository.findAll();
    }
    
    public Optional<Video> getById(Long id) {
    	return videoRepository.findById(id);    	
    } 
    
    public Boolean addVideo(Video video) {    
    	videoRepository.save(video);
    	return true; 
    }
    
    


}
