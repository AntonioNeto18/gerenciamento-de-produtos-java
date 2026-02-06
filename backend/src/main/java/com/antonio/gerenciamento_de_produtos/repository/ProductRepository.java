package com.antonio.gerenciamento_de_produtos.repository;

import com.antonio.gerenciamento_de_produtos.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
