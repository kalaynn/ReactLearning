import React from 'react';
import trollFace from '../images/troll-face.png';

export default function Navbar() {
    return (
        <div className="p-6 w-xl bg-gradient-to-r from-[#672280] to-[#A626D3] text-white">
            <div className="flex justify-between">
                <div className="flex">
                    <img src={trollFace} className="w-8 h-8 mr-2"/>
                    <span className="font-bold text-xl tracking-tightest">
                        Meme Generator
                    </span>
                </div>
                <div className="my-auto font-inter">
                    React course - Project 3
                </div>
            </div>
        </div>
    );
}