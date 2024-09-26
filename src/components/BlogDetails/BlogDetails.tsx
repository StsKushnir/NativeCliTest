import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigationTypes";
import { BlogPost } from "../../types/blogsTypes";
import useStore from "../../store/useStore";
import { s } from "./BlogDetails.styles";

type BlogDetailsProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Details">;
  route: RouteProp<StackParamList, "Details">;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ navigation, route }) => {
  const { authToken } = useStore();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data.data);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, authToken]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!blog) {
    return <Text>Error: {error}</Text>;
  }

  const date = new Date(blog.createdAt);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <ImageBackground
    source={require("../../assets/icons/bg-icon.png")}
    style={s.background}
  >
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={s.backButton}
      >
        <Text style={s.backButtonText}>
          <Image
            source={require("../../assets/icons/back-icon.png")}
            style={s.backImg}
          />
          Back
        </Text>
      </TouchableOpacity>
      <Text style={s.title}>{blog.title}</Text>
      <Image source={{ uri: blog.image }} style={s.image} />
      <Text style={s.desc}>{blog.description}</Text>
      <Text style={s.blogContent}>{blog.blogContent}</Text>
      <Text style={s.date}>
        Сreated: {formattedDate} {formattedTime}
      </Text>
    </View>
    </ImageBackground>
  );
};

export default BlogDetails;
