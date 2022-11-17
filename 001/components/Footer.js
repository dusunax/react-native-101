import { StyleSheet, Text, View, Link } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>dusunax ⓒ 2022.11</Text>
      <Text style={styles.footerText}>아이콘 제작자: Dooder - Flaticon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",

    paddingVertical: 16,
  },
  footerText: {
    opacity: 0.5,
    fontSize: 12,
    paddingBottom: 4,
  },
});
