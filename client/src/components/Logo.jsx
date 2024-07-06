import React from 'react';
import './Logo.css'; 
import logo from '../Photos/img1.png';

function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} className="logo" />
        </div>
    );
}

export default Logo;