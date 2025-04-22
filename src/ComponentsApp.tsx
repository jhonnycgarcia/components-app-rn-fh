import './gesture-handler.native';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigation/Navigator';

export const ComponentsApp = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
};
