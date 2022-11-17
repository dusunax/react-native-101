import { StyleSheet, View, Text } from "react-native";

export default function Title() {
  return <Text style={styles.title}>답정너 계산기</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
