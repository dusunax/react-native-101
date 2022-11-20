import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./components/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
