import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import ValuesScreen from "../components/ValuesScreen/ValuesScreen";
import BlogsScreen from '../components/BlogsScreen/BlogsScreen';

const ValuesStack = createNativeStackNavigator();

function ValuesStackScreen() {
  return (
    <ValuesStack.Navigator>
      <ValuesStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <ValuesStack.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{ headerShown: false }}
      />
      <ValuesStack.Screen
        name="Values"
        component={ValuesScreen}
        options={{ headerShown: false }}
      />
    </ValuesStack.Navigator>
  );
}

export default ValuesStackScreen;
