import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { s } from "./LoginScreen.styles";
import useStore from "../../store/useStore";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const {setUserName, setAuthToken } = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const token = data.data.token;
        const name = data.data.user.name;
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userName", name); 
        setAuthToken(token);
        setUserName(name);
  
        Alert.alert("Successful!", `Welcome, ${name}!`);
        navigation.navigate("Main");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred during login.");
    }
  };
  

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.closeBtn}
        onPress={() => navigation.navigate("Start")}
      >
        <Image
          source={require("../../assets/icons/close-icon.webp")}
          style={s.closeIcon}
        />
      </TouchableOpacity>

      <Text style={s.title}>Log In</Text>

      <TextInput
        style={s.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={s.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={s.button} onPress={handleLogin}>
        <Text style={s.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={s.loginTextContainer}>
        <Text style={s.loginText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={s.loginButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
