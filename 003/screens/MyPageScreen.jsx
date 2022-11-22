import { StyleSheet, View, Text } from "react-native";

export default function MyPageScreen() {
  return (
    <View style={styles.container}>
      <Text>MyPageScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",
  },
});
