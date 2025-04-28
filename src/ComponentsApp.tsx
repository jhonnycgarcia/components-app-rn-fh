import './gesture-handler.native';

import { Navigator } from './presentation/navigation/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';



export const ComponentsApp = () => {
    return (
        <ThemeProvider>
            <Navigator />
        </ThemeProvider>
    );
};
