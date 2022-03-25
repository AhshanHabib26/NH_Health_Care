import React from 'react';
import {BsCart4} from 'react-icons/bs'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav_container'>
                <div className="site_name">
                    <h3> <span> NH Heal</span>th Care</h3>
                </div>
                <div className="menu_item">
                    <BsCart4/>
                    <span>0</span>
                </div>
            </nav>

            <div className="header_info">
                <h3>Choose Your Dieting Food</h3>
            </div>


        </div>
    );
};

export default Header;