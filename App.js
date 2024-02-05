import 'react-native-gesture-handler';


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import HomeScreen from './HomeScreen';
import LoginScreen from './Login';
//import DetailsScreen from './DetailsScreen';
import {StatusBar} from 'react-native';
 //import COLORS from './colors';
//import PaymentPage from './PaymentPage';
import Register from './Register';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* {<StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
      <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={LoginScreen}  />
    
    <Stack.Screen name='SignUp' component={Register}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;