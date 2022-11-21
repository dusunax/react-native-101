import { StyleSheet, View } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,

    marginHorizontal: 24,
    marginVertical: 6,

    alignItems: "center",

    backgroundColor: "#fff",

    // Android
    elevation: 3,
    // iOS
    shadowColor: "#222",
    shadowOffser: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
