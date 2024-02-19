package com.rlaclgh.server.dto;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CategoryDto {
  private Long id;
  private Long parentId;
  private String name;
  private Integer step;

  public CategoryDto(Long id, Long parentId, String name, Integer step) {
    this.id = id;
    this.parentId = parentId;
    this.name = name;
    this.step = step;
  }

  private List<CategoryDto> children = new ArrayList<>();

  public void addChild(CategoryDto child) {
    children.add(child);
  }
}
