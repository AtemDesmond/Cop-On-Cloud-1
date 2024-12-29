import React from "react";
import { registerRootComponent } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen"; // Replace with your actual home screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
registerRootComponent(SplashScreen);

export default AppNavigator;
