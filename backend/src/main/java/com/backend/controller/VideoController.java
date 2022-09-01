package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.VideoDao;
import com.backend.repository.VideoDaoRepository;
import com.backend.service.VideoService;



@RestController
@CrossOrigin()
@RequestMapping("/videos")
public class VideoController {
	
	@Autowired
    private VideoDaoRepository videoDaoRepository;
    
    @Autowired
    private VideoService videoService;
    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<VideoDao> getVideoDaos(Model model) {
        List<VideoDao> videoDaos = videoService.getVideoDaos();
        model.addAttribute("videoDaos", videoDaos);
        return videoDaos;
    }
    
    @PostMapping("/post")
//    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public void createMovie(@RequestBody VideoDao video)  {
    	videoService.addVideo(video);        
    }


}
