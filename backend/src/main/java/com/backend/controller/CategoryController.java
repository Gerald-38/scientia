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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Category;
import com.backend.model.Video;
import com.backend.repository.CategoryRepository;
import com.backend.service.CategoryService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private CategoryService categoryService;
    
    
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<Category> getCategories(Model model) {
        List<Category> categories = categoryService.getCategories();
        model.addAttribute("videoDaos", categories);
        return categories;
    }
    
//  @RequestMapping(value = "get/id", method = RequestMethod.GET)
	@GetMapping("get/id")
		public ResponseEntity<Optional<Category>> getVideoById(@RequestParam Long id) {
		return ResponseEntity.ok(categoryService.getById(id));
	}
	  
	@PostMapping("/post")
//  @RequestMapping(value = "/post", method = RequestMethod.POST)
	public void createCategory(@RequestBody Category category)  {
		categoryService.addCategory(category);        
	}
  
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
	  Boolean isCategoryDeleted = categoryService.deleteById(id);

	  if (!isCategoryDeleted) {
		  return "error";
	    }
		return null;
	 }


}
