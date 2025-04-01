import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useColorScheme } from "react-native";

export const HomeIcon = (props) => {
  const theme = useColorScheme(); // Detecta si el tema es "dark" o "light"
  const iconColor = theme === "dark" ? "white" : "black"; // Blanco en dark, negro en light

  return <MaterialCommunityIcons name="pokeball" size={24} color={iconColor} />
};


export const FireIcon = (props) => (
  <FontAwesome6 name="fire" size={24} color="red" {...props} />
);

export const ElectricIcon = (props) => (
<MaterialIcons name="electric-bolt" size={24} color="yellow" {...props} />
);
  
export const WaterIcon = (props) => (
  <Ionicons name="water" size={24} color="blue" {...props} />
);

export const GrassIcon = (props) => (
  <FontAwesome5 name="leaf" size={24} color="green" {...props} />
);

export const IceIcon = (props) => (
  <FontAwesome6 name="snowflake" size={24} color="lightblue" {...props} />
);
