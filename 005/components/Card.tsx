import { Colors } from "@/constants/colors";
import { View, StyleSheet } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    width: "100%",
    padding: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: Colors.tertiary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
});
