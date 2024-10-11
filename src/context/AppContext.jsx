// src/context/AppContext.js
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [state, setState] = useState({
        theme: 'light',  // Pode ser 'light' ou 'dark'
    });

    const toggleTheme = () => {
        setState(prevState => ({
            ...prevState,
            theme: prevState.theme === 'light' ? 'dark' : 'light',
        }));
    };

    return (
        <AppContext.Provider value={{ state, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}

