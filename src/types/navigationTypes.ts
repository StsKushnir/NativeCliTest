// types/navigationTypes.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Стек для навігації
export type RootStackParamList = {
  Blogs: undefined; // Список блогів
  Details: { id: string }; // Страница деталей блога с id как параметром
};

// Маршрут для сторінки деталей блогу
export type BlogDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type StackParamList = {
  Main: undefined;
  Details: { id: string };
  Values: undefined;
  Blogs: undefined;
  Start: undefined;
  Login: undefined;
  SignIn: undefined;
};
