import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { screenOptions } from "../../utils/bottomTabOption";
import { ROUTESLIST } from "../../utils/routeList";

export default function BottomTab({ lang }) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {ROUTESLIST.map(({ name, component, kor }) => (
        <Tab.Screen
          options={{ headerTitle: "" }}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
}
