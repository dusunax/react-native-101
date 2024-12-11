import { Colors } from "@/constants/color";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

export default function NumberContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    color: Colors.primary500,
    borderColor: Colors.primary400,
    borderBottomWidth: 2,
    paddingBottom: 6,
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 24,
  },
});
