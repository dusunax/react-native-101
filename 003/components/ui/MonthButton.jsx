import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function Button({ children, onPress }) {
  const pressHandler = () => {
    onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{
          color: Colors.accent,
        }}
      >
        <View>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 100,

    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
});
