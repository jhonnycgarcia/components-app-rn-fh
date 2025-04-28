import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { useColorScheme } from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    useEffect(() => {
        setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    }, [colorScheme]);

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
                isDark: currentTheme === 'dark',
                setTheme,
            }}
        >{children}
        </ThemeContext.Provider>
    );
};
