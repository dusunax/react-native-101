import { StyleSheet, Text, Pressable, View, ViewStyle, StyleProp } from "react-native";
import { Colors } from "@/constants/color";

export default function PrimaryButton({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 4,
    shadowColor: Colors.primary500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    userSelect: "none",
  },
  pressed: {
    backgroundColor: Colors.primary500,
    opacity: 0.75,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
});
