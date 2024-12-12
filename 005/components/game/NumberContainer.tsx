import { Colors } from "@/constants/color";
import { View, StyleSheet, ViewStyle, StyleProp,Text } from "react-native";

export default function NumberContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    borderColor: Colors.primary400,
    borderBottomWidth: 2,
    paddingBottom: 6,
    marginTop: 6,
    marginBottom: 24,
  },
  text: {
    color: Colors.primary500,
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
});
