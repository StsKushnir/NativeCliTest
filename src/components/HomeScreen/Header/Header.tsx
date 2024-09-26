import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { s } from "./Header.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../../store/useStore";

type HeaderProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const { userName, setUserName, authToken, setAuthToken } = useStore();
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userName");
      setAuthToken(null);
      setUserName(null);
      setMenuVisible(false); 
      navigation.navigate("Start"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const fetchTokenAndUserName = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        const savedUserName = await AsyncStorage.getItem("userName");
  
        if (token) {
          setAuthToken(token);
          setUserName(savedUserName);
          navigation.navigate("Main"); 
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchTokenAndUserName();
  }, [authToken]);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleOutsidePress = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  console.log("name:", userName);
  console.log("token:", authToken);

return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={s.container}>
        <View style={s.headerWrap}>
          <Image
            source={require("../../../assets/icons/logo-icon.png")}
            style={s.logo}
          />
          <View style={s.loginWrap}>
            {!authToken ? (
              <>
                <TouchableOpacity
                  style={s.sign}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  <Text style={s.signText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={s.login}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={s.loginText}>Log In</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={s.account} onPress={toggleMenu}>
                <Image
                  source={require("../../../assets/icons/icon-account.png")}
                  style={s.iconAccount}
                />
                <Text style={s.accountText}>{userName}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {menuVisible && (
          <View style={s.dropdownMenu}>
            <TouchableOpacity style={s.menuItem} onPress={handleLogout}>
              <Text style={s.menuItemText}>Exit from Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
