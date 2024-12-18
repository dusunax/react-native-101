import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#222222" },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={({ route }) => ({
            title: route.params ? "Meals" : "Categories",
          })}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      params?.categoryId
      <StatusBar barStyle="light-content" backgroundColor="#222222" />
    </>
  );
}
