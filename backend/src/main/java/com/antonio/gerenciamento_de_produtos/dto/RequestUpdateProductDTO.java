package com.antonio.gerenciamento_de_produtos.dto;

import com.antonio.gerenciamento_de_produtos.entity.Product;
import jakarta.validation.constraints.Positive;

import java.time.LocalDateTime;

public record RequestUpdateProductDTO (
        String name,
        String description,
        @Positive(message = "O preço precisa ser positivo.") Double price,
        @Positive(message = "A quantidade no estoque precisa ser positiva.") Integer stock
) {
    public Product toEntity (Product product) {
        product.setName(this.name() != null ? this.name() : product.getName());
        product.setDescription(this.description() != null ? this.description() : product.getDescription());
        product.setPrice(this.price() != null ? this.price() : product.getPrice());
        product.setStock(this.stock() != null ? this.stock() : product.getStock());
        product.setUpdatedAt(LocalDateTime.now());
        return product;
    }
}
