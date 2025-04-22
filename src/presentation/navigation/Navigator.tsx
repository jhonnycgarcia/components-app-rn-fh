import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
