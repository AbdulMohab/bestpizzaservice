import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='banner' id='home' >
            <Navbar />
            <div className='banner__content'>
                <div className='container' >
                    <div className='banner__text' >
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>
                            Lorem ipsum sit amet constructor adipiscing elit. Excepturi minus ut mollitia error molestiae quia.
                        </p>
                        <div className='banner__btn'>
                        <a href='' className='btn btn-smart' >DELIVERY NOW</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
