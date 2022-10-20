package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Video;
import com.backend.repository.VideoRepository;
import com.backend.service.VideoService;




@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/videos")
public class VideoController {
	
	@Autowired
    private VideoRepository videoRepository;
    
    @Autowired
    private VideoService videoService;
    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<Video> getVideos(Model model) {
        List<Video> videos = videoService.getVideoDaos();
        model.addAttribute("videoDaos", videos);
        return videos;
    }    

    @GetMapping("get/id")
    public ResponseEntity<Optional<Video>> getVideoById(@RequestParam Long id) {
        return ResponseEntity.ok(videoService.getById(id));
    }
    
    @PostMapping("/post")
    public ResponseEntity<?> createMovie(@RequestBody Video video) throws Exception  {
		if (videoService.checkExistingVideo(video)) {
    		throw new Exception("Cette video existe déjà !!!");
    	}
		else {
			return ResponseEntity.ok(videoService.addVideo(video));			
		}	
    } 

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
      Boolean isMovieDeleted = videoService.deleteById(id);
      
      if (!isMovieDeleted) {
        return "error";
      }
	return null;
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity updateVideo(@PathVariable Long id, @RequestBody Video video) {
        Video currentVideo = videoRepository.findById(id).orElseThrow(RuntimeException::new);
        currentVideo.setTitle(video.getTitle());
        currentVideo.setDescription(video.getDescription());
        currentVideo.setImage(video.getImage());
        currentVideo.setDuration(video.getDuration());
        currentVideo.setLocation(video.getLocation());      
        currentVideo.setCategories(video.getCategories());
        currentVideo = videoRepository.save(video);
        return ResponseEntity.ok(currentVideo);
    }
}
