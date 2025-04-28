import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

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

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', (nextAppState) => {
    //         const colorSchema = Appearance.getColorScheme();
    //         setCurrentTheme(colorSchema === 'dark' ? 'dark' : 'light');
    //     });

    //     return () => {
    //       subscription.remove();
    //     };
    // }, []);

    const setTheme = (theme: ThemeColor) => {
        console.log('setTheme', theme);
        setCurrentTheme(theme);
    };

    const currentColors = currentTheme === 'light'
        ? lightColors
        : darkColors;
    const isDark = currentTheme === 'dark';

    return (
        <NavigationContainer
            theme={isDark ? DarkTheme : DefaultTheme}
        >
            <ThemeContext.Provider
                value={{
                    currentTheme,
                    colors: currentColors,
                    isDark,
                    setTheme,
                }}
            >{children}
            </ThemeContext.Provider>
        </NavigationContainer>
    );
};
