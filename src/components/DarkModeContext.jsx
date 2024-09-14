// code for DarkModeContext.js but remember that you have to learn it to write on your own cause right now you just took it from google
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can also save the dark mode preference in localStorage or a state management tool
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export { DarkModeProvider, useDarkMode };


//to include the dark mode you have to include the darkmode class in the tailwind.config file 
