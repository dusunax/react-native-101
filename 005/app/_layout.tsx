import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import { DarkTheme } from "@react-navigation/native";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screens/game_play" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
