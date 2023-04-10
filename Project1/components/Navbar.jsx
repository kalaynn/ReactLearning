import React from 'react';
import reactLogo from '../images/react-logo.png'

export default function Header() {
    return (
        <div className="bg-dark-highlight text-white">
            <div className="p-6 flex">
                <img src={reactLogo} className="w-8 mr-1"/>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-between">
                        <div className="text-2xl text-cyan font-bold tracking-tighter mt-auto">
                            ReactFacts
                        </div>
                        <div className="text-blue-100 font-semibold mt-auto">
                            React Course - Project 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}