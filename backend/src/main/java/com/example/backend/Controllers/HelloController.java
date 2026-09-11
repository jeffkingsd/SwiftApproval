package com.example.backend.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Records.Greeting;
import com.example.backend.Records.Product;



@RestController 
public class HelloController {
    
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/greeting")
    public Greeting greeting() {
        return new Greeting("Hello","From the backend!");
    }

    @GetMapping ("/products")
    public Product[] getProducts() {
        return new Product[]{
            new Product("1", "Coffee Cup", 7),
            new Product("2", "Dishwasher", 310),
            new Product("3", "BasketBall", 16),
            new Product("4", "Stuff animal", 10),
            new Product("5", "Pillow", 20),
            new Product("6", "Shampoo", 8)
        };
    }
}
