import React from 'react';

const BannerItem = (props) => {

    const { id, prev, next, slider_img } = props;
    
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carusel_img rounded-xl'>
                <img src={slider_img} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                <p className='text-white'>
                    There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;