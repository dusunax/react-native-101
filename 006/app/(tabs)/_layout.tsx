import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fa0",
        tabBarInactiveTintColor: "#bbb",
        tabBarActiveBackgroundColor: "#222222",
        tabBarInactiveBackgroundColor: "#222222",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Entypo name="cake" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-page"
        options={{
          title: "MyPage",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
