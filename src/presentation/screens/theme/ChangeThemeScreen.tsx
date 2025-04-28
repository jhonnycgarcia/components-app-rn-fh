import { View } from 'react-native';
import { Button, CustomView, Title } from '../../components';

export const ChangeThemeScreen = () => {
    return (
        <CustomView margin>
            <Title text="Change Theme" safe />

            <Button
                text="Light"
                onPress={() => {}}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Dark"
                onPress={() => {}}
            />
        </CustomView>
    );
};
