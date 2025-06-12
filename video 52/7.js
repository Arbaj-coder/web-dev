function filterProducts(products, criterion) {
    return products.filter(product => {
        return Object.entries(criterion).every(([key, value]) => product[key] === value);
    });
}

const products = [
    { id: 1, name: "T-Shirt", category: "Clothing", price: 20 },
    { id: 2, name: "Laptop", category: "Electronics", price: 999 },
    { id: 3, name: "Shoes", category: "Clothing", price: 50 },
    { id: 4, name: "Headphones", category: "Electronics", price: 199 }
];

const criterion = { category: "Clothing" };
const filtered = filterProducts(products, criterion);

console.log(filtered);
