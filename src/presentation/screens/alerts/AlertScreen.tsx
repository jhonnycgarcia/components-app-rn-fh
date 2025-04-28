import { Alert, View } from 'react-native';
import prompt from 'react-native-prompt-android';

import { Button, CustomView, Title } from '../../components';
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {
    const { isDark } = useContext(ThemeContext);

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',

          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ], {
            userInterfaceStyle: isDark ? 'dark' : 'light',
        });

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ], {
            cancelable: true,
            onDismiss: () => console.log('onDismiss'),
            userInterfaceStyle: isDark ? 'dark' : 'light',
        });

    const onShowPrompt = () => {
        // ! codigo nativo, no funciona en android
       /*  Alert.prompt(
            'Correo electrónico',
            'Ingrese su correo electrónico',
            (valor: string) => console.log({valor}),
            'secure-text',
            'test@test.com',
            'number-pad',
        ); */

        showPrompt({
            title: 'Correo electrónico',
            subTitle: 'Ingrese su correo electrónico',
            buttons: [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            placeholder: 'test@test.com',
            defaultValue: '',
        });
    };

    return (
        <CustomView>
            <Title text="AlertScreen" safe />
            <Button
                text="Alerta - 2 Botones"
                onPress={createTwoButtonAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                text="Alerta - 3 Botones"
                onPress={createThreeButtonAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                text="Prompt"
                onPress={onShowPrompt}
            />
        </CustomView>
    );
};
