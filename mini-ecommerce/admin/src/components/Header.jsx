import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };

    if (!userInfo || !userInfo.isAdmin) return null;

    return (
        <header>
            <div className="container">
                <Link to="/"><h2>Admin Panel</h2></Link>
                <nav>
                    <ul>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><button onClick={logoutHandler} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
