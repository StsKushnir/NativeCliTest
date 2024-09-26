import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import ValuesScreen from "../components/ValuesScreen/ValuesScreen";
import BlogsScreen from '../components/BlogsScreen/BlogsScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Values"
        component={ValuesScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
