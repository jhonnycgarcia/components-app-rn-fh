import './gesture-handler.native';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigation/Navigator';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren) => {
    return (
        <NavigationContainer>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NavigationContainer>
    );
};

export const ComponentsApp = () => {
    return (
        <AppState>
            <Navigator />
        </AppState>
    );
};
