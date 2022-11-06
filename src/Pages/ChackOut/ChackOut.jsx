import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ChackOut = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = React.useContext(AuthContext);

    const handle_place_holder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first_name.value} ${form.last_name.value}`;
        const email = user?.email || form.email.value;
        const phone = form.phone.value;
        const massage = form.massage.value;

        const order = {
            service: _id, service_name: title, price, customer: name, email, phone, massage
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order Placed Successfully');
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handle_place_holder}>
                <h2 className='text-4xl '>You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='first_name' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='last_name' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='massage' className="textarea textarea-bordered h-24 w-full" placeholder="Bio"></textarea>
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ChackOut;