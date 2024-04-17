package com.springboot.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository repositorioImages;

    public List<Images> getImages(){
        return repositorioImages.findAll();
    }
    public Images getImage(int id) {
        return repositorioImages.findById(id).orElse(null);
    }

    public boolean insertImages(Images images) {
        try {
            repositorioImages.save(images);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean updateImages(Images images) {
        try {
            Images imageExistente = repositorioImages.findById(images.getId()).orElse(null);
            imageExistente.setName(images.getName());
            imageExistente.setUser_name(images.getUser_name());
            imageExistente.setWebformatURL(images.getWebformatURL());
            repositorioImages.save(imageExistente);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteImages(int id) {
        try {
            Images imageExistente = repositorioImages.findById(id).orElse(null);
            repositorioImages.delete(imageExistente);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}