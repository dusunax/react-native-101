import { Colors } from "@/constants/colors";
import { Text, StyleSheet } from "react-native";

export default function Title({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
