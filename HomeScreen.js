import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Latest Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
