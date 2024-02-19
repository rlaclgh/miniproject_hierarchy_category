package com.rlaclgh.server.category;

import com.rlaclgh.server.dto.CategoryDto;
import com.rlaclgh.server.dto.CreateCategoryDto;
import com.rlaclgh.server.dto.ICategoryDto;
import com.rlaclgh.server.entity.Category;
import com.rlaclgh.server.repository.CategoryRepository;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

  @Autowired
  private CategoryRepository categoryRepository;


  public void createCategory(CreateCategoryDto createCategoryDto ){

    Long parentId = createCategoryDto.getParentId();
    String name = createCategoryDto.getName();

    if (parentId != null) {
      Category parentCategory = categoryRepository.getReferenceById(parentId);
      Category newCategory = new Category(name, parentCategory);
      categoryRepository.save(newCategory);
    } else {
      Category newCategory = new Category(name);
      categoryRepository.save(newCategory);
    }
  }


  public List<CategoryDto> getCategories() {

    List<ICategoryDto> recursiveCategories = categoryRepository.getRecursiveCategories();


    Map<Long, CategoryDto> categoryMap = new HashMap<>();
    List<CategoryDto> rootCategories = new ArrayList<>();

    for (ICategoryDto dto: recursiveCategories) {
      CategoryDto categoryDto = new CategoryDto(dto.getId(), dto.getParentId(), dto.getName(), dto.getStep());
      categoryMap.put(categoryDto.getId(), categoryDto);
    }

    for (CategoryDto categoryDto : categoryMap.values()) {
      Long parentId = categoryDto.getParentId();
      if (parentId == null) {
        rootCategories.add(categoryDto);
      } else {
        CategoryDto parent = categoryMap.get(parentId);
        if (parent != null) {
          parent.addChild(categoryDto);
        }
      }
    }



    return rootCategories;
  }



}
