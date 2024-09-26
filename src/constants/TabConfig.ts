import HomeScreen from '../components/HomeScreen/HomeScreen';
import BlogsScreen from '../components/BlogsScreen/BlogsScreen';
import ValuesScreen from '../components/ValuesScreen/ValuesScreen';
import { SCREEN_NAMES } from '../types/ScreenNames';

export const TAB_CONFIG = [
  { name: SCREEN_NAMES.HOME, icon: require("../assets/icons/home-icon.png"), component: HomeScreen },
  { name: SCREEN_NAMES.VALUES, icon: require("../assets/icons/our-values-icon.png"), component: ValuesScreen },
  { name: SCREEN_NAMES.BLOGS, icon: require("../assets/icons/blogs-icon.png"), component: BlogsScreen },
];
