import React from 'react';
import reactLogo from '../images/react-logo.png'

export default function Header({toggleDarkMode}) {
    return (
        <div className="bg-white text-gray-807000 dark:bg-dark-highlight dark:text-white">
            <div className="p-6 flex">
                <img src={reactLogo} className="w-8 mr-1"/>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-between">
                        <div className="text-2xl text-cyan font-bold tracking-tighter mt-auto">
                            ReactFacts
                        </div>
                        <div 
                            className="flex items-center" 
                        >
                            <p className="text-gray-500">Light</p>
                            <div 
                                className="w-8 h-4 bg-gray-500 dark:bg-gray-300 flex items-center cursor-pointer rounded-lg mx-2 justify-start dark:justify-end"
                                onClick={toggleDarkMode}
                            >
                                <div className="w-4 h-4 bg-white dark:bg-gray-700 rounded-full ms-px me-px"></div>
                            </div>
                            <p className="text-gray-300">Dark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}