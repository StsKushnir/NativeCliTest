import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import { s } from "./ValuesScreen.styles";
import useStore from "../../store/useStore";

interface ValueItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ValueCard = ({ item }: { item: ValueItem }) => (
  <View style={s.card}>
    <Image source={{ uri: item.image }} style={s.image} />
    <Text style={s.cardTitle}>{item.title}</Text>
    <Text style={s.description}>{item.description}</Text>
  </View>
);

const ValuesScreen = () => {
  const { authToken } = useStore();
  const [values, setValues] = useState<ValueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/values", {
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
  }, []);

  if (loading) {
    return (
      <View style={s.container}>
        <Text>Завантаження...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/icons/bg-icon.png")}
      style={s.background}
    >
      <View style={s.container}>
        {error ? (
          <Text>Помилка: {error}</Text>
        ) : (
          <>
            <Text style={s.title}>Our Values</Text>
            <FlatList
              data={values.slice(0, 8)} 
              renderItem={({ item }) => <ValueCard item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={s.list}
              showsVerticalScrollIndicator={true} 
            />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default ValuesScreen;
