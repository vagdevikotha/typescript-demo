"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    productName;
    price;
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }
    display() {
        console.log("Product:", this.productName);
        console.log("Price:", this.price);
    }
}
exports.Product = Product;
