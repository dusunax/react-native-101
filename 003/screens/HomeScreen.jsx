import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
