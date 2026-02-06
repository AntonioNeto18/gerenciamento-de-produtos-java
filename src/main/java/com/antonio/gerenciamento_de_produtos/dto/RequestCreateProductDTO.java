package com.antonio.gerenciamento_de_produtos.dto;

import com.antonio.gerenciamento_de_produtos.entity.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.time.LocalDateTime;

public record RequestCreateProductDTO(
        @NotBlank(message = "O nome é obrigatório.") String name,
        @NotBlank(message = "A descrição é obrigatória.") String description,
        @NotNull(message = "O preço é obrigatório.") @Positive(message = "O preço precisa ser positivo.") Double price,
        @NotNull(message = "A quantidade no estoque é obrigatória.") @Positive(message = "A quantidade no estoque precisa ser positiva.") Integer stock
) {
    public Product toEntity() {
        return Product.builder()
                .name(this.name())
                .description(this.description())
                .price(this.price())
                .stock(this.stock())
                .active(true)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }
}
