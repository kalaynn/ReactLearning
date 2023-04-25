import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <div className="shadow p-6">
            <img src={airbnbLogo} className="w-20 h-6"/>
        </div>
    );
}