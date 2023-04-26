import React from 'react';
import star from '../images/star-red.png'

export interface CardProps {
    title: string;
    reviewStars: string;
    reviewCount: number;
    location: string;
    cost: number;
    imageSrc: string;
    isSoldOut: boolean;
    isOnline: boolean;
    key?: number;
}

export function Card({title, reviewStars, reviewCount, location, cost, imageSrc, isSoldOut, isOnline}: CardProps) {
    return (
        <div className="mr-4 shrink-0 text-gray-800 text-xs font-light relative">
            {
                isSoldOut && (
                    <div className="mt-2 ml-2 p-1 absolute bg-white z-10 rounded">
                        SOLD OUT
                    </div>
                )
            }
            {
                isOnline && (
                    <div className="mt-2 ml-2 p-1 absolute bg-white z-10 rounded">
                        ONLINE
                    </div>
                )
            }
            <img src={imageSrc} className="w-44 mb-2"/>
            <div className="ml-2">
                <div className="flex flex-row mb-1">
                    <img src={star} className="w-3 h-3 mr-1"/>
                    <span className="mr-1">
                        {reviewStars}
                    </span>
                    <span className="text-gray-600 mr-1">
                        ({reviewCount}) •
                    </span>
                    <span className="text-gray-600">
                        {location}
                    </span>
                </div>
                <div className="mb-1">
                    {title}
                </div>
                <div className="">
                    <span className="font-semibold mr-1">
                        From {cost}
                    </span>
                    / person
                </div>
            </div>
        </div>
    );
}