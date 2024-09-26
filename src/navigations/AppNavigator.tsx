import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StartScreen from "../../src/components/StartScreen/StartScreen";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import SignInScreen from "../components/SignInScreen/SignInScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, ActivityIndicator } from "react-native";
import { TAB_CONFIG } from "../constants/TabConfig";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import { StackParamList } from "../types/navigationTypes";
import useStore from '../store/useStore'
import BlogsScreen from "../components/BlogsScreen/BlogsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "rgba(224, 224, 224, 0.5)",
          shadowColor: "#E3BFF4",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.8,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  elevation: 3,
                  backgroundColor: "transparent",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={tab.icon}
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: focused ? "#007AFF" : "#B0B0B0",
                  }}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { authToken, userName } = useStore()
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error checking auth token:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [isLoggedIn, userName, authToken]); 

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#E3BFF4" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          {isLoggedIn ? (
            <>
              <Stack.Screen name="Main" component={MainTabNavigator} />
              <Stack.Screen name="Details" component={BlogDetails} />
              <Stack.Screen name="Blogs" component={BlogsScreen} />
              <Stack.Screen name="Start" component={StartScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Start" component={StartScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Main" component={MainTabNavigator} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};


export default AppNavigator;
