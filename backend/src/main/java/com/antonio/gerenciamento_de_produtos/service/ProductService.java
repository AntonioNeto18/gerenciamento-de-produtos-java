package com.antonio.gerenciamento_de_produtos.service;

import com.antonio.gerenciamento_de_produtos.dto.RequestCreateProductDTO;
import com.antonio.gerenciamento_de_produtos.dto.RequestUpdateProductDTO;
import com.antonio.gerenciamento_de_produtos.entity.Product;
import com.antonio.gerenciamento_de_produtos.exceptions.NotFoundException;
import com.antonio.gerenciamento_de_produtos.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product create (RequestCreateProductDTO dto) {
        return repository.save(dto.toEntity());
    }

    public List<Product> findAll () {
        return repository.findAll().stream().filter(p -> p.isActive()).toList();
    }

    public Product findById (long id) {
        var product = exists(id);
        return product;
    }

    public Product update (long id, RequestUpdateProductDTO dto) {
        var product = exists(id);
        return repository.save(dto.toEntity(product));
    }

    public void deleteById (long id) {
        var product = exists(id);
        product.setActive(false);
        repository.save(product);
    }

    private Product exists (long id) {
        var product = repository.findById(id).orElseThrow(() -> new NotFoundException("Produto não encontrado."));
        if (product.isActive()) return product;
        else throw new NotFoundException("Produto não encontrado.");
    }
}
