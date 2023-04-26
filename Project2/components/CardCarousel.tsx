import React from 'react';
import { Card, CardProps } from './Card'
import cardImageSwimmingLessons from '../images/card-image-swimming-lessons.png'
import cardImageWeddingPhotography from '../images/card-image-wedding-photography.png'
import cardImageMountainBiking from '../images/card-image-mountain-biking.png'

export default function CardCarousel() {
    return (
        <div className="mt-6">
            <div className="flex flex-row overflow-auto">
                {Cards().map((card, index) => (
                    <Card
                        {...card}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

function Cards(): CardProps[] {
    return [
        {
            title: "Life lessons with Katie Zaferes",
            reviewStars: "5.0",
            reviewCount: 6,
            location: "USA",
            cost: 136,
            imageSrc: cardImageSwimmingLessons,
            isSoldOut: true,
            isOnline: false
        },
        {
            title: "Learn wedding photography",
            reviewStars: "5.0",
            reviewCount: 30,
            location: "USA",
            cost: 125,
            imageSrc: cardImageWeddingPhotography,
            isSoldOut: false,
            isOnline: true
        },
        {
            title: "Group Mountain Biking",
            reviewStars: "4.8",
            reviewCount: 2,
            location: "USA",
            cost: 50,
            imageSrc: cardImageMountainBiking,
            isSoldOut: false,
            isOnline: false
        }
    ]
}