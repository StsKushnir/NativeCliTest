import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { s } from './BlogsScreen.styles';
import { FlatList } from 'react-native-gesture-handler';
import useStore from '../../store/useStore';
import { BlogPostPreview } from '../../types/blogsTypes';
import { RootStackParamList } from '../../types/navigationTypes';

type BlogsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Blogs'>;
  route: RouteProp<any, any>;
};

const BlogCard = ({
  item,
  navigation,
}: {
  item: BlogPostPreview;
  navigation: BlogsScreenProps['navigation'];
}) => {

  const handlePress = () => {
    console.log('id:', item.id);
    navigation.navigate('Details', { id: item.id });
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

const BlogsScreen: React.FC<BlogsScreenProps> = ({ navigation }) => {
  const { authToken,} = useStore();
  const [values, setValues] = useState<BlogPostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogs', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        setValues(data.data);
      } catch (error: any) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={s.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/icons/bg-icon.png')}
      style={s.background}
    >
      <View style={s.container}>
        {error ? (
          <Text>Error: {error}</Text>
        ) : (
          <>
            <Text style={s.title}>Blogs</Text>
            <FlatList
              data={values}
              renderItem={({ item }) => (
                <BlogCard item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={s.list}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default BlogsScreen;
