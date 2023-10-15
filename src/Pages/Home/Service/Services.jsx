import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, set_services] = React.useState([]);
    const [isAsc, set_isAsc] = React.useState(true);
    const searchRef = React.useRef();
    const [search, set_search] = React.useState('');

    React.useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => set_services(data));
    }, [isAsc, search]);

    const handle_search = () => {
        const search = searchRef.current.value;
        set_search(search);

    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className="text-5xl font-samibold">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <input className='input input-sm' ref={searchRef} type="text" />
                <button onClick={handle_search} className='btn btn-ghost normal-case'>Search</button>
                <button onClick={() => set_isAsc(!isAsc)} className='btn btn-ghost'>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default Services;