package com.springboot.demo;

import com.springboot.demo.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagesRepository extends JpaRepository<Images,Integer> {

}