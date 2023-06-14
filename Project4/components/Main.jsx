import React from 'react';
import ListItem from './ListItem';
import reactLogoPartialLight from '../images/react-logo-partial-light.png'
import reactLogoPartialDark from '../images/react-logo-partial-dark.png'

export default function MainContent({darkMode}) {
    return (
        <div className="px-8 bg-no-repeat bg-right bg-white text-gray-700 dark:bg-dark dark:text-white" style={darkMode ? {backgroundImage: `url(${reactLogoPartialDark})`} : {backgroundImage: `url(${reactLogoPartialLight})`}}>
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