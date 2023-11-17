import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Film1 from './pages/Film1'
import Film2 from './pages/Film2'
import Film3 from './pages/Film3'
import Compra from './pages/Compra';
import ActualFilm from './pages/ActualFilm';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Film1' component={ Film1 } options={{ title: 'Film 1'}} />
        <Stack.Screen name='Film2' component={ Film2 } options={{ title: 'Film 2'}} />
        <Stack.Screen name='Film3' component={ Film3 } options={{ title: 'Film 3'}} />
        <Stack.Screen name='Compra' component={ Compra } options={{ title: 'Compra'}} />
        <Stack.Screen name='ActualFilm' component={ ActualFilm } options={{ title: 'ActualFilm'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
