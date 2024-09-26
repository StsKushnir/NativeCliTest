import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { s } from "./LatestsPosts.styles";
import Carousel from "react-native-reanimated-carousel";
import useStore from "../../../store/useStore";
import { BlogPost, BlogPostPreview } from "../../../types/blogsTypes";

type BlogsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const BlogCard = ({
  item,
  navigation,
}: {
  item: BlogPostPreview;
  navigation: any;
}) => {
  const handlePress = () => {
    navigation.navigate("Details", { id: item.id });
  };

  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={s.image} />
      <TouchableOpacity style={s.addInfo} onPress={handlePress}>
        <Text style={s.presAddInfo}>See More</Text>
      </TouchableOpacity>
    </View>
  );
};

const LatestsPosts: React.FC<BlogsScreenProps> = ({ navigation, route }) => {
  const { authToken } = useStore();
  const [values, setValues] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs/latest", {
          headers: {
            Authorization: `Bearer ${authToken}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch values");
        }

        const data = await response.json();
        setValues(data.data);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authToken]);

  return (
    <>
      <Text style={s.title}>Latest Blogs</Text>
      <Carousel
        loop
        width={340}
        height={340}
        autoPlay={false}
        data={values}
        renderItem={({ item }) => (
          <BlogCard item={item} navigation={navigation} />
        )}
      />
    </>
  );
};

export default LatestsPosts;
