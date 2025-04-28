import { View } from 'react-native';
import { Button, CustomView, Title } from '../../components';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
    const { setTheme } = useContext(ThemeContext);
    return (
        <CustomView margin>
            <Title text="Change Theme" safe />

            <Button
                text="Light"
                onPress={() => setTheme('light')}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Dark"
                onPress={() => setTheme('dark')}
            />
        </CustomView>
    );
};
