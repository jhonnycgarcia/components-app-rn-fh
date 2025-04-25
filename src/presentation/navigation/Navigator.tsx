import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { Animation101Screen, Animation102Screen } from '../screens/animations';
import { SwitchScreen } from '../screens/switches';
import { AlertScreen } from '../screens/alerts/AlertScreen';

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />

      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
    </Stack.Navigator>
  );
}
