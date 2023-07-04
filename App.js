import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './pages/home';
import OrdoScreen from './pages/ordo';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ePrescrib" screenOptions={{headerBackTitleVisible: false}}>
        <Stack.Screen name="ePrescrib" component={HomeScreen} />
        <Stack.Screen name="Mes ordonnances" component={OrdoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}