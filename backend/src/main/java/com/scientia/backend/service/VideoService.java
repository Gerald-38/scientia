package com.scientia.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scientia.backend.model.Video;
import com.scientia.backend.repository.VideoRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class VideoService {
	
	@Autowired
	private VideoRepository videoRepository;
	
    public List<Video> getVideos() {
        return videoRepository.findAll();
    }    

    public Boolean addVideo(Video movie) {    
    	videoRepository.save(movie);
    	return true; 
    }
    
    public Video getByTitle(String title) {
    	return videoRepository.findByTitle(title).orElseThrow();    	
    }
    
//    public List<Video> findVideosByRestrictionAge(Integer restrictionAge) {
//        List<Video> allVideos = getVideos();
//        return allVideos.stream().filter(movie -> movie.getRestrictionAge()<=restrictionAge).collect(Collectors.toList());
//    }
    
    public Video getById(Long id) {
    	return videoRepository.findById(id).orElseThrow();    	
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
