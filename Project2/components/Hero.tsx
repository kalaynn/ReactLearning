import React from 'react';
import heroImage from '../images/hero-image.png'

export default function Hero() {
    return (
        <div className="mb-10">
            <img src={heroImage} className="px-8 mb-8"/>
            <h1 className="font-semibold text-4xl mb-4">
                Online Experiences
            </h1>
            <div className="font-light w-3/5 text-gray-800">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </div>
        </div>
    );
}