import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { s } from "./Hero.styles";

const Hero = () => {
  const openLink = () => {
    Linking.openURL("https://medium.muz.li/");
  };

  return (
    <View style={s.heroWrap}>
      <Text style={s.pretitle}>Xceed Blog</Text>
      <Text style={s.title}>10 Web Design Mistakes and How to Avoid Them</Text>
      <Image
        source={require("../../../assets/icons/home-bg-img.jpg")}
        style={s.bgImg}
      />
      <Text style={s.description}>
        Looking for more daily inspiration?{"\n"}
        Download Muzli extension — your go-to source for discovering design
        ideas from world’s top creators!
      </Text>

      <Text style={s.data}>
        13.06, 2024 · 2:15 PM ·{" "}
        <Text style={s.dataSource} onPress={openLink}>
          medium.muz.li
        </Text>
      </Text>
    </View>
  );
};

export default Hero;
