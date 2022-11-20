import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 30,

    marginVertical: 16,

    backgroundColor: Colors.accent500,
  },
  text: {
    lineHeight: 90,
    fontSize: 40,
    textAlign: "center",

    color: "#fff",
  },
});
