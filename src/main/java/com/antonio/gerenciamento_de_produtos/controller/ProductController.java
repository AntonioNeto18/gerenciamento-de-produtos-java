package com.antonio.gerenciamento_de_produtos.controller;

import com.antonio.gerenciamento_de_produtos.dto.RequestCreateProductDTO;
import com.antonio.gerenciamento_de_produtos.dto.RequestUpdateProductDTO;
import com.antonio.gerenciamento_de_produtos.entity.Product;
import com.antonio.gerenciamento_de_produtos.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProductController {

    private ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Product> create (@RequestBody @Valid RequestCreateProductDTO request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(request));
    }

    @GetMapping
    public ResponseEntity<List<Product>> list () {
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById (@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateById (@PathVariable long id, @RequestBody @Valid RequestUpdateProductDTO request) {
        return ResponseEntity.status(HttpStatus.OK).body(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById (@PathVariable long id) {
        service.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
