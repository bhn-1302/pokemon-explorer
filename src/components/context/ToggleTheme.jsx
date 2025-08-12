import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');


    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    // objeto de tema para styled components
    const themeObject = {
        mode: theme
    };

    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <StyledThemeProvider theme={themeObject}>
            {children}
        </StyledThemeProvider>
        
    </ThemeContext.Provider>
);
}
