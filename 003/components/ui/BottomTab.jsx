import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { screenOptions } from "../../utils/bottomTabOption";
import { ROUTESLIST } from "../../utils/routeList";

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {ROUTESLIST.map(({ name, component }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}
