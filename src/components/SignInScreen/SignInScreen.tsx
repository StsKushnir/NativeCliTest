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
import { s } from "./SignInScreen.styles";
import useStore from "../../store/useStore";

type SignInScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { setUserName } = useStore(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignUp = async () => {
    if (!agree) {
      Alert.alert("Error", "You must agree to the Privacy Policy.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}`);

      if (response.ok) {
        const token = data.data.token; 
        const userName = data.data.user.name; 
        await AsyncStorage.setItem("authToken", token); 
        
        console.log("User name to set:", userName);
        setUserName(userName); 

        Alert.alert("Successful!", `Welcome, ${userName}!`);
        navigation.navigate("Main"); 
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred during registration.");
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

      <Text style={s.title}>Sign In</Text>

      <TextInput
        style={s.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={s.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={s.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={s.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <View style={s.checkboxContainer}>
        <TouchableOpacity
          style={[s.checkbox, agree && s.checked]}
          onPress={() => setAgree(!agree)}
        >
          {agree && <Image source={require('../../assets/icons/checkbox-icon.png')} style={s.checkboxImg}></Image>}
        </TouchableOpacity>
        <Text style={s.checkboxText}>
          Yes, I have read and agree to Privacy Policy.
        </Text>
      </View>

      <TouchableOpacity style={s.button} onPress={handleSignUp}>
        <Text style={s.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={s.loginTextContainer}>
        <Text style={s.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={s.loginButton}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
