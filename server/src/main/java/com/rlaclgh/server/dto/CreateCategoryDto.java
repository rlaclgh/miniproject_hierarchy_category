package com.rlaclgh.server.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class CreateCategoryDto {
  private Long parentId;

  @NonNull
  private String name;

  public CreateCategoryDto(@NonNull String name) {
    this.name = name;
  }

  public CreateCategoryDto(Long parentId, @NonNull String name) {
    this.parentId = parentId;
    this.name = name;
  }
}
