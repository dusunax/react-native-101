import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import { StyleSheet } from "react-native";

function Chip({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.chipContainer, style]}>{children}</View>;
}

function ChipItem({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.chipItem, style]}>{children}</Text>;
}

Chip.Item = ChipItem;
export default Chip;

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  chipItem: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#aaa",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
});
