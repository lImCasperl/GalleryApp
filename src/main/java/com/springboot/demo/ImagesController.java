package com.springboot.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ImagesController {

    @Autowired
    private ImagesService service;

    @GetMapping("/images")
    public List<Images> getImages() {
        return service.getImages();
    }

    @GetMapping("/images/{id}")
    public Images getImage(@PathVariable int id) {
        return service.getImage(id);
    }

    @PostMapping("/images")
    public boolean insertImage(@RequestBody Images empleados) {
        return service.insertImages(empleados);
    }

    @PutMapping("/images")
    public boolean updateImages(@RequestBody Images empleados) {
        return service.updateImages(empleados);
    }

    @DeleteMapping("/images")
    public boolean deleteImages(int id) {
        return service.deleteImages(id);
    }

}