import React from 'react';
import { Card, CardProps } from './Card'


export interface CardCarouselProps {
    cards: CardProps[]
}

export function CardCarousel({cards}: CardCarouselProps) {
    return (
        <div className="mt-6">
            <div className="flex flex-row overflow-auto">
                {cards.map((card, index) => (
                    <Card
                        title={card.title}
                        reviewStars={card.reviewStars}
                        reviewCount={card.reviewCount}
                        location={card.location}
                        cost={card.cost}
                        imageSrc={card.imageSrc}
                        isSoldOut={card.isSoldOut}
                        isOnline={card.isOnline}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}