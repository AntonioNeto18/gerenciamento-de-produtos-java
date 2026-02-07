import { toast } from "react-toastify";

export default class Api {
    
    constructor() {
        this.baseUrl = "http://localhost:8080";
        this.apiUrl = this.baseUrl + "/produtos";
        this.defaultHeaders = {
            "Content-Type": "application/json"
        };
    }

    async findAllProducts () {
        const response = await fetch(this.apiUrl);
        const data = response.json();
        return data;
    }

    async createProduct (product) {
        const response = await fetch(this.apiUrl, {
            headers: this.defaultHeaders,
            method: "POST",
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            const data = await response.json();
            for (const [key, value] of Object.entries(data)) {
                toast.error(value);
            };
            return false;
        } else {
            toast.success("Produto cadastrado com sucesso!")
            return true;
        }
    }

    async deleteProduct (productId) {
        const response = await fetch(`${this.apiUrl}/${productId}`, {
            headers: this.defaultHeaders,
            method: "DELETE"
        });

        if (!response.ok) {
            const data = await response.json();
            toast.error(data.message);
            return;
        } else {
            toast.success("Produto deletado com sucesso!")
            return;
        }
    }

    async updateProduct (productId, product) {
        const response = await fetch(`${this.apiUrl}/${productId}`, {
            headers: this.defaultHeaders,
            method: "PUT",
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            const data = await response.json();
            for (const [key, value] of Object.entries(data)) {
                toast.error(value);
            };
            return false;
        } else {
            toast.success("Produto atualizado com sucesso!");
            return true;
        }
    }

}