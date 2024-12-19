import { CATEGORIES } from "@/data/dummy-data";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#222222" },
          headerStyle: { backgroundColor: "#222222" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Categories",
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="meals-overview"
          options={{
            headerBackButtonDisplayMode: "default",
          }}
        />
      </Stack>
      <StatusBar barStyle="light-content" backgroundColor="#222222" />
    </>
  );
}
