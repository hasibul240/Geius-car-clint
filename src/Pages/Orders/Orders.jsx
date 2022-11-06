import React from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';


const Orders = () => {

    const { user, sign_out } = React.useContext(AuthContext);
    const [orders, set_orders] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius_token')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    sign_out()
                }
                return res.json()
            })
            .then(data => set_orders(data));
    }, [user?.email]);

    const handle_delete = (id) => {

        const proceed = window.confirm('Are you sure, you want to cancle this order?');

        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {

                        if (data.deletedCount > 0) {
                            alert('Order deleted successfully');
                            const remaining = orders.filter(order => order._id !== id);
                            set_orders(remaining);
                        };

                    };
                });
        };
    };

    const handle_stutus = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaning = orders.filter(order => order._id !== id);
                    const appruved = orders.find(order => order._id === id);
                    appruved.status = 'Approved';

                    const new_orders = [...remaning, appruved];
                    set_orders(new_orders);
                }
                console.log(data)
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handle_delete={handle_delete} handle_stutus={handle_stutus} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;