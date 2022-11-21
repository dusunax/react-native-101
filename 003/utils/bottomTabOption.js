import { ROUTESLIST } from "./routeList";
import Ionicons from "@expo/vector-icons/Ionicons";

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focusd, color, size }) => {
    let iconName;

    for (let curr in ROUTESLIST) {
      const { name, icon, iconOutline } = ROUTESLIST[curr];

      if (route.name === name) {
        iconName = focusd ? icon : iconOutline;
      }
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});
