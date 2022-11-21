import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 8,
    color: Colors.accent500,

    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
