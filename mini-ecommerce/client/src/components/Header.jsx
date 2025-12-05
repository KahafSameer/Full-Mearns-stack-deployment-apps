import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>MiniStore</h2>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/cart">
                                <FaShoppingCart /> Cart
                                {cartItems.length > 0 && <span style={{ marginLeft: '5px', background: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>{cartItems.length}</span>}
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li>Hello, {user.name}</li>
                                <li><button onClick={logout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button></li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login"><FaUser /> Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
