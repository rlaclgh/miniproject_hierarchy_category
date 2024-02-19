package com.rlaclgh.server.category;


import com.rlaclgh.server.dto.CategoryDto;
import com.rlaclgh.server.dto.CreateCategoryDto;
import com.rlaclgh.server.dto.ICategoryDto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryController {



  @Autowired
  private CategoryService categoryService;

  @PostMapping()
  public void createCategory(
      @RequestBody CreateCategoryDto createCategoryDto
  ) {
    categoryService.createCategory(createCategoryDto);
  }


  @GetMapping()
  public List<CategoryDto> getCategories() {

    return categoryService.getCategories();
  }



}
