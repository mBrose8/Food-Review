import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Home from './src/screens/Home';
import Login from './src/screens/Login';
import RegisterUser from './src/screens/RegisterUser';
import ValidateToken from './src/screens/ValidateToken';
import Logout from './src/screens/Logout';
import CadastroPet from './src/screens/CadastroPet';
import CadastroPetWalker from './src/screens/CadastroPetWalker';
import TelaPets from './src/screens/TelaPets.js'
import Agendamento from './src/screens/Agendamento.js'


const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} >
        <Stack.Screen name="ValidateToken" component={ValidateToken} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="CadastroPet" component={CadastroPet} />
        <Stack.Screen name="CadastroPetWalker" component={CadastroPetWalker} />
        <Stack.Screen name="TelaPets" component={TelaPets}/>
        <Stack.Screen name="Agendamento" component={Agendamento}/> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'white',
  },
});
 
export default () => {
  return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
  );
};
