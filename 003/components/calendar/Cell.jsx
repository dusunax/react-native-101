import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Cell({
  children,
  style,
  textStyle,
  outerStyle,
  onPress,
}) {
  return (
    <View style={[styles.cellOuter, outerStyle]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? [styles.pressed] : "")}
        android_ripple={
          {
            // color: "#eee",
          }
        }
      >
        <View style={[styles.innerCell]}>
          <View style={[style]}>
            <Text style={[styles.cell, textStyle]}>{children}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cellOuter: {
    flex: 1,
    minHeight: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  innerCell: {},
  rippleEffect: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden",

    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
