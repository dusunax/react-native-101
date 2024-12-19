import HomeButton from "@/components/HomeButton";
import { FavoriteMealsProvider } from "@/context/FavoriteMealsContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <FavoriteMealsProvider>
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
            headerRight: () => <HomeButton style={{ marginRight: 20 }} />,
          }}
        />
        <Stack.Screen
          name="meal-detail"
          options={{
            headerRight: () => <HomeButton style={{ marginRight: 20 }} />,
          }}
        />
      </Stack>
      <StatusBar barStyle="light-content" backgroundColor="#222222" />
    </FavoriteMealsProvider>
  );
}
