import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='max-w-screen-xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;