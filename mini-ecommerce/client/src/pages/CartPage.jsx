import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty <Link to="/">Go Back</Link></p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
                            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                            <div>
                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                            </div>
                            <div>${item.price}</div>
                            <div>Qty: {item.qty}</div>
                            <button onClick={() => removeFromCart(item._id)} className="btn" style={{ background: 'red' }}>Delete</button>
                        </div>
                    ))}
                    <h2>Total: ${totalPrice}</h2>
                    <button className="btn btn-block">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
