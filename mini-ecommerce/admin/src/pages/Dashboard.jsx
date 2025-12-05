import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the Admin Panel.</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h3>Manage Products</h3>
                    <p>Add, edit, or delete products.</p>
                </div>
                <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h3>View Orders</h3>
                    <p>Check latest customer orders.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
