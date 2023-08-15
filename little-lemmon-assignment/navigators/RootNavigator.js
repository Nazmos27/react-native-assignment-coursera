import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerTitleAlign:"center"}}
    initialRouteName="Welcome"
    >
     <Stack.Screen name="Welcome" options={{title:"Welcome"}} component={WelcomeScreen}></Stack.Screen>
     <Stack.Screen name="Subscribe" options={{title:"Subscribe"}} component={SubscribeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootNavigator;
