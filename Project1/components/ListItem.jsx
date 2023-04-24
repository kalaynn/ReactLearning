import React from 'react';

export default function ListItem(props) {
    return (
        <li className="text-cyan text-2xl">
            <div className="text-white text-base mb-3">
                {props.text}
            </div>
        </li>
    )
}