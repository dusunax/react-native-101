import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Cell({ children, style, onPress }) {
  return (
    <View style={[styles.cellOuter, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? [styles.pressed] : "")}
        android_ripple={{
          color: "#eee",
        }}
      >
        <View style={[styles.cell, style]}>
          <Text style={[styles.cell, style]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cellOuter: {
    flex: 1,
  },
  cell: {
    minHeight: 50,
    lineHeight: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
