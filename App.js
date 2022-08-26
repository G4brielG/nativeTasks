import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Tareas } from './src/screens'

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Inicio" component={Home} />
        <Screen name="Tareas" component={Tareas} />
      </Navigator>
    </NavigationContainer>
  );
}