import { Colors } from "@/constants/color";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

export default function Title({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
