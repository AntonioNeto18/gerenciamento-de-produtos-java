package com.antonio.gerenciamento_de_produtos.service;

import com.antonio.gerenciamento_de_produtos.dto.RequestDTO;
import com.antonio.gerenciamento_de_produtos.entity.Product;
import com.antonio.gerenciamento_de_produtos.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductService {

    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product create (RequestDTO dto) {
        validate(dto);
        return repository.save(toEntity(dto));
    }

    public List<Product> findAll () {
        return repository.findAll().stream().filter(p -> p.isActive()).toList();
    }

    public Product findById (long id) {
        Product product = exists(id);
        return product;
    }

    public Product update (long id, RequestDTO dto) {
        Product product = exists(id);
        validate(dto);

        product.setName(dto.name());
        product.setDescription(dto.description());
        product.setPrice(dto.price());
        product.setStock(dto.stock());
        product.setUpdatedAt(LocalDateTime.now());

        return repository.save(product);
    }

    public void deleteById (long id) {
        Product product = exists(id);
        product.setActive(false);

        repository.save(product);
    }

    private Product toEntity(RequestDTO dto) {
        var product = new Product();
        product.setName(dto.name());
        product.setDescription(dto.description());
        product.setPrice(dto.price());
        product.setStock(dto.stock());
        product.setActive(true);
        product.setCreatedAt(LocalDateTime.now());
        product.setUpdatedAt(LocalDateTime.now());

        return product;
    }

    private Product exists (long id) {
        Product product = repository.findById(id).orElse(null);
        if (product == null || !product.isActive()) throw new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Produto não encontrado"
        );
        else return product;
    }

    private void validate (RequestDTO dto) {
        if (dto.name().isBlank()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "O nome não pode estar vazio"
            );
        }

        if (dto.price() < 0) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "O preço não pode ser negativo"
            );
        }
    }
}
