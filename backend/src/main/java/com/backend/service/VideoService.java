package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.VideoDao;
import com.backend.repository.VideoDaoRepository;


@Service
public class VideoService {
	
	@Autowired
	private VideoDaoRepository videoDaoRepository;
	
    public List<VideoDao> getVideoDaos() {
        return videoDaoRepository.findAll();
    }
    
    public Optional<VideoDao> getById(Long id) {
    	return videoDaoRepository.findById(id);    	
    } 
    
    public Boolean addVideo(VideoDao video) {    
    	videoDaoRepository.save(video);
    	return true; 
    }
    
    


}
