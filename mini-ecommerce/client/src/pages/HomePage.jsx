import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:3001/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Latest Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product._id} className="card">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <div className="card-body">
                            <Link to={`/product/${product._id}`}>
                                <h3>{product.name}</h3>
                            </Link>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
