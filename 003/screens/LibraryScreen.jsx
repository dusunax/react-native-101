import { StyleSheet, View, Text } from "react-native";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>LibraryScreen</Text>
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
