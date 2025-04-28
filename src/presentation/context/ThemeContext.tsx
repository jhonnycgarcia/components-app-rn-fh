import { createContext, useState, type PropsWithChildren } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    const setTheme = (theme: ThemeColor) => {
        console.log('setTheme', theme);
        setCurrentTheme(theme);
    };

    const currentColors = currentTheme === 'light'
        ? lightColors
        : darkColors;

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                colors: currentColors,
                setTheme,
            }}
        >{children}
        </ThemeContext.Provider>
    );
};
