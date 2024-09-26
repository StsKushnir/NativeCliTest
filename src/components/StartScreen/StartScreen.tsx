import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { s } from './StartScreen.styles';

type StartScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/icons/bg-icon.png")}
      style={s.background}
    >
      <View style={s.container}>
        <View style={s.startWrap}>
          <Image
            source={require("../../assets/icons/logo-icon2x.png")}
            style={s.logo}
          />
          <Text style={s.welcomeText}>Welcome Here!</Text>
          <Text style={s.descriptionText}>
            Here you can find a lot of interesting things!
          </Text>
          <View style={s.buttonContainer}>
            <View style={s.loginBts}>
              <TouchableOpacity
                style={s.button}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={s.buttonText}>Log In</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={s.button}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text style={s.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={s.guestBts}>
            {/* <TouchableOpacity
              style={s.button}
              onPress={() => navigation.navigate("Main")}
            >
              <Text style={[s.buttonText]}>Continue as guest</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
