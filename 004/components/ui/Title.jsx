import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 8,
    color: "#333",

    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
