import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import Header from './Header/Header';
import { s } from './HomeScreen.styles';
import Hero from "./Hero/Hero";
import LatestsPosts from "./LatestsPosts/LatestsPosts";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../../assets/icons/bg-icon.png")}
      style={s.background}
    >
      <ScrollView contentContainerStyle={s.scrollcontainer}>
        <View style={s.container}>
          <Header navigation={navigation} route={route} />
          <Hero />
          <LatestsPosts navigation={navigation} route={route} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
