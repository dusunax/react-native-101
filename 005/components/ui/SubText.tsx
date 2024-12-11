import { Colors } from "@/constants/color";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";

export default function SubText({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.subtext, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtext: {
    fontSize: 10,
    color: Colors.primary400,
  },
});
