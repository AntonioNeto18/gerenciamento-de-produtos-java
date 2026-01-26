package com.antonio.gerenciamento_de_produtos.dto;

public record RequestDTO (
        String name,
        String description,
        double price,
        int stock
) {

}
