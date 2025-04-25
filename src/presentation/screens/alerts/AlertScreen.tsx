import { Alert, View } from 'react-native';
import { Button, CustomView, Title } from '../../components';

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',

          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

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
        });

    const showPrompt = () => {
        Alert.prompt(
            'Correo electrónico',
            'Ingrese su correo electrónico',
            (valor: string) => console.log({valor}),
            'secure-text',
            'test@test.com',
            'number-pad',
        );
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
                onPress={showPrompt}
            />
        </CustomView>
    );
};
