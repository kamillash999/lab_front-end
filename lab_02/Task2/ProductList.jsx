import React from 'react';
import card from './Card';

const ProductList = () => {
    const productData = [
       { id: 10, title: "Laptop", price: 1200},
       { id: 20, title: "Phone", price: 800 },
       { id:30, title: "Watch", price: 200}
    ];
return (
    <div className="products-grid">
        {productData.map((product) => (
            <Card key={product.id} title={product.title}>
                <p>Current Price: ${product.pride}</p>
            </Card>
        ))}
    </div>
);
};

export default ProductList;