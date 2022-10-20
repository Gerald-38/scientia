package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.Category;
import com.backend.repository.CategoryRepository;


@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }
    
    public Optional<Category> getById(Long id) {
    	return categoryRepository.findById(id);    	
    } 	
    
    public Category getByName(String name) {
    	return categoryRepository.findByName(name).orElseThrow();    	
    }
    
    public Boolean addCategory(Category category) {    
    	categoryRepository.save(category);
    	return true; 
    }
    
	public boolean checkExistingCategory(Category category) {
		Optional<Category> foundCategory = categoryRepository.findByName(category.getName());
		return foundCategory.isPresent();
	}
    
    public Boolean deleteById(Long id) {
        boolean isCategoryInDB;
        
        try {
          isCategoryInDB = categoryRepository.existsById(id);

          if (!isCategoryInDB) {
            return false;
          }
          categoryRepository.deleteById(id);
          return true;
          
        } catch (RuntimeException e) {
        	System.out.println(e.getLocalizedMessage());
          return false;
        }
    }
}
