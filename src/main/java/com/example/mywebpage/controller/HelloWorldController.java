package com.example.mywebpage.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping(path = "/api/hello")
    public String test(){
        return "hello world!";
    }
}
