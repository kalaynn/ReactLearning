import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        console.log(darkMode);
        setDarkMode((prevValue) => ! prevValue);
    }
    
    return (
        <div className={darkMode ? "dark max-w-xl" : "max-w-xl"} >
            <Navbar
                toggleDarkMode={toggleDarkMode}
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    );
}