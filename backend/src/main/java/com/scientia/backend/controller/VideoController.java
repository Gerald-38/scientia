package com.scientia.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.scientia.backend.model.Video;
import com.scientia.backend.repository.VideoRepository;
import com.scientia.backend.service.VideoService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/videos")
public class VideoController {
	
	@Autowired
	private VideoService videoService;
	
	@Autowired 
	private VideoRepository videoRepository;
	
	
    @GetMapping("/get")
    public List<Video> getVideos(Model model) {
        List<Video> videos = videoService.getVideos();
        model.addAttribute("videos", videos);
        return videos;
    }
    
    @PostMapping("/post")
    public String createVideo(@RequestBody Video video)  {
    	videoService.addVideo(video);    	
        return ("Video is valid");
    }
    
    @GetMapping("/video")
    public ResponseEntity<Video> getVideoByTitle(@RequestParam String title) {
        return ResponseEntity.ok(videoService.getByTitle(title));
    }
    
    @GetMapping("/id")
    public ResponseEntity<Video> getVideoById(@RequestParam Long id) {
        return ResponseEntity.ok(videoService.getById(id));
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity updateVideo(@PathVariable Long id, @RequestBody Video video) {
        Video currentVideo = videoRepository.findById(id).orElseThrow(RuntimeException::new);
        currentVideo.setTitle(video.getTitle());
        currentVideo.setDescription(video.getDescription());
//        currentVideo.setTags(video.getTags());
        currentVideo = videoRepository.save(video);
        return ResponseEntity.ok(currentVideo);
    }    
  
    
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
      Boolean isVideoDeleted = videoService.deleteById(id);

      if (!isVideoDeleted) {
        // ...
      }

      return "Video deleted";
    }
    
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler({MethodArgumentNotValidException.class})
//    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
//        Map<String, String> errors = new HashMap<>();
//        ex.getBindingResult().getAllErrors().forEach((error) -> {
//            String fieldName = ((FieldError) error).getField();
//            String errorMessage = error.getDefaultMessage();
//            errors.put(fieldName, errorMessage);
//        });
//        return errors;
//    }

}
