package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Video;
import com.backend.repository.VideoRepository;
import com.backend.service.VideoService;




@RestController
@CrossOrigin()
@RequestMapping("/videos")
public class VideoController {
	
	@Autowired
    private VideoRepository videoRepository;
    
    @Autowired
    private VideoService videoService;
    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<Video> getVideoDaos(Model model) {
        List<Video> videos = videoService.getVideoDaos();
        model.addAttribute("videoDaos", videos);
        return videos;
    }
    
//    @RequestMapping(value = "get/id", method = RequestMethod.GET)
    @GetMapping("get/id")
    public ResponseEntity<Optional<Video>> getVideoById(@RequestParam Long id) {
        return ResponseEntity.ok(videoService.getById(id));
    }
    
    @PostMapping("/post")
//    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public void createMovie(@RequestBody Video video)  {
    	videoService.addVideo(video);        
    }


}
