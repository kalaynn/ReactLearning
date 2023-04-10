import React from 'react';

export default function ListItem(props) {
    return (
        <li>
            <div className="text-white text-base mb-3">
                {props.text}
            </div>
        </li>
    )
}