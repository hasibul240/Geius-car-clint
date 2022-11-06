import React from 'react';

const OrderRow = ({ order, handle_delete, handle_stutus }) => {

    const { _id, customer, phone, price, service, service_name, status } = order;

    const [order_service, set_order_service] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => set_order_service(data));
    }, [service]);



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handle_delete(_id)} className="btn btn-ghost">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                order_service?.img &&
                                <img src={order_service?.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {service_name}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={()=>handle_stutus(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;