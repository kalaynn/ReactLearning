import React from 'react';

export default function ListItem({text}) {
    return (
        <li className="text-cyan text-2xl">
            <div className="text-gray-700 dark:text-white text-base mb-3">
                {text}
            </div>
        </li>
    )
}