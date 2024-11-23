"use strict";
function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
const product = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];
console.log("Total Price:", calculateTotal(product));
function isValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(isValid("test@example.com"));
console.log(isValid("invalid-email"));
//# sourceMappingURL=product.js.map