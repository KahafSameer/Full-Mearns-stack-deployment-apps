import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/products/${id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const addToCartHandler = () => {
        addToCart(product, Number(qty));
        navigate('/cart');
    };

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '400px' }} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                <div style={{ margin: '1rem 0' }}>
                    <label>Qty: </label>
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={addToCartHandler} className="btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
