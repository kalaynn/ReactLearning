import React from 'react';
import ListItem from './ListItem';
import reactLogoPartial from '../images/react-logo-partial.png'

export default function MainContent() {
    return (
        <div className="bg-dark text-white px-8 bg-no-repeat bg-right" style={{backgroundImage: `url(${reactLogoPartial})`}}>
            <h1 className="text-4xl font-bold tracking-tight mb-8 pt-16">Fun facts about React</h1>
            <ul className="list-disc mx-8 pb-24">
                <ListItem text="Was first released in 2013" />
                <ListItem text="Was originally created by Jordan Walke" />
                <ListItem text="Has well over 100k stars on Github" />
                <ListItem text="Is maintained by Facebook" />
                <ListItem text="Powers thousands of enterprise apps, including mobile apps" />
            </ul>
        </div>
    );
}