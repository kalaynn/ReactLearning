import React from 'react';
import Hero from './Hero'
import CardCarousel from './CardCarousel'

export default function Main() {
    return (
        <div className="m-6">
            <Hero/>
            <CardCarousel/>
        </div>
    );
}