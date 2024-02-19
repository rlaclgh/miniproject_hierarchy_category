package com.rlaclgh.server.repository;

import com.rlaclgh.server.dto.ICategoryDto;
import com.rlaclgh.server.entity.Category;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CategoryRepository extends JpaRepository<Category, Long> {

  @Query(value = """
  with recursive category_recursive  as (
  	select
  		c."id" as "id",	c.parent_id as "parentId", c."name" as "name", 1 as "step"
  	from
  		category c
  	where
  		c."parent_id" is null
  	union
  	select
  		c."id" as "id", c."parent_id" as "parentId", c."name" as "name", cr.step + 1 as "step"
  	from
  		category_recursive cr
  	join category c
  		on cr."id" = c."parent_id"
  )
  
  select * from category_recursive
""", nativeQuery = true)
  List<ICategoryDto> getRecursiveCategories();







}
