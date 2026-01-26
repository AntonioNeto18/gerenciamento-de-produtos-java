# API de Gerenciamento de Produtos

Este repositório contém uma **API RESTful** construída com **Java**, **Spring Boot**, **JPA** e **H2 database**.  
Foi desenvolvida como parte dos meus estudos em Java, com foco no gerenciamento de produtos.

---

## Tecnologias utilizadas

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Banco de dados H2 (em memória)
- Lombok
- Maven

---

## Funcionalidades

- **Criar produto** 
- **Listar produtos ativos**
- **Buscar produto por ID**
- **Atualizar produto**
- **Remoção lógica (soft delete)**
- **Validação de regras de negócio**
- **Retorno de status HTTP adequados**
---

## Regras de negócio

- O nome do produto não pode estar vazio
- O preço não pode ser negativo
- Produtos inativos não aparecem na listagem
- Produtos removidos não são apagados do banco
- Produto não encontrado retorna erro 404

---

## Pré-requisitos
- Java 21
- Maven

---

## Como Executar

Siga estas instruções para obter uma cópia do projeto funcionando em sua máquina local.

1. **Clone o repositório:**  
    ```sh
    git clone https://github.com/AntonioNeto18/gerenciamento-de-produtos-java.git
    cd gerenciamento-de-produtos-java
    ```

2.  **Execute o projeto**
    ```sh
    mvn spring-boot:run
    ```

A API estará disponível em `http://localhost:8080`.

---

## Endpoints da API

A API fornece os seguintes endpoints para interagir com os produtos.

| Método | Endpoint              | Descrição                        | Corpo da requisição              |
| :----- | :-------------------- | :------------------------------- | :------------------------------- |
| `GET`  | `/produtos`            | Lista todos os produtos ativos.       | -                                |
| `GET`  | `/produtos/{id}`        | Retorna um produto pelo ID. | -                                |
| `POST` | `/produtos`            | Cria um novo produto.             | `{"name": String, "description": String, "price": double, "stock": int}` |
| `PUT`  | `/produtos/{id}`        | Atualiza um produto existente se estiver ativo.       | `{"name": String, "description": String, "price": double, "stock": int}` |
| `DELETE`| `/produtos/{id}`       | Deixa o produto como inativo. (soft delete)    | -                                |

---
