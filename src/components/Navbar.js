import React from 'react';

const Navbar = () => {
    return <nav className='navbar'>
        <div className='navbar__text'>
            <div className='logo'>
                <img src="/img/logo.png" alt='Logo' />
            </div>
            <ul className='navbar__ul'>
                <li><a href='#home' >Home</a></li>
                <li><a href='#about' >About</a></li>
                <li><a href='#menu' >Menu</a></li>
                <li><a href='#news' >News</a></li>
                <li><a href='#contact' >Contact</a></li>
            </ul>


        </div>
    </nav>;
};

export default Navbar;
