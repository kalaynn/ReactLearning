import React from 'react';

export interface MemeData {
    id: string;
    name: string;
    url: string;
    topText: string;
    bottomText: string;
}

export function Meme({id, name, url, topText, bottomText} : MemeData) {
    return (
        <div className="relative uppercase font-bold text-4xl text-white text-outline font-impact">
            {url && (
                <div className="absolute text-center w-full px-8 top-10">
                    {topText}
                </div>
            )}
            <img
                src={url}
                alt={name}
                className="rounded-sm mx-auto"
            />
            {url && (
                <div className="absolute text-center w-full px-8 bottom-10">
                    {bottomText}
                </div>
            )}
        </div>
    );
}