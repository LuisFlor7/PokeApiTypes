import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const HomeIcon = (props) => (
  <FontAwesome5 name="home" size={24} color="white" {...props} />
);

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
