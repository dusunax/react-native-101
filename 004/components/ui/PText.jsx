import { StyleSheet, Text } from "react-native";

export default function PText({ children, style }) {
  return <Text style={[styles.p, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  p: {
    color: "#56696c",
    lineHeight: 22,
  },
});
