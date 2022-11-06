import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services/>
        </div>
    );
};

export default Home;