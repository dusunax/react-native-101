import { Colors } from "@/constants/colors";
import { Text, StyleSheet } from "react-native";

export default function SubText({ children }: { children: React.ReactNode }) {
  return <Text style={styles.subtext}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtext: {
    fontSize: 10,
    color: Colors.primary400,
  },
});
