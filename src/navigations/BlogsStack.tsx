import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../components/HomeScreen/HomeScreen";
import ValuesScreen from "../components/ValuesScreen/ValuesScreen";
import BlogsScreen from '../components/BlogsScreen/BlogsScreen';

const BlogsStack = createNativeStackNavigator();

function BlogsStackScreen() {
  return (
    <BlogsStack.Navigator>
      <BlogsStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <BlogsStack.Screen 
        name="Blogs" 
        component={BlogsScreen} 
        options={{ headerShown: false }} 
      />
      <BlogsStack.Screen 
        name="Values" 
        component={ValuesScreen} 
        options={{ headerShown: false }}
      />
    </BlogsStack.Navigator>
  );
}

export default BlogsStackScreen;
