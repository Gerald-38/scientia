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
	
    public List<Video> getVideos() {
        return videoRepository.findAll();
    }
    
    public Optional<Video> getById(Long id) {
    	return videoRepository.findById(id);    	
    } 
    
    public Boolean addVideo(Video video) {    
    	videoRepository.save(video);
    	return true; 
    }
    
	public boolean checkExistingVideo(Video video) {
		Optional<Video> foundVideo = videoRepository.findByTitle(video.getTitle());
		return foundVideo.isPresent();
	}
    
    public Boolean deleteById(Long id) {
        boolean isVideoInDB;
        
        try {
          isVideoInDB = videoRepository.existsById(id);

          if (!isVideoInDB) {
            return false;
          }
          videoRepository.deleteById(id);
          return true;
          
        } catch (RuntimeException e) {
        	System.out.println(e.getLocalizedMessage());
          return false;
        }
    }
}
