import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
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
          color: Colors.primary300,
        }}
      >
        <View>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 100,

    backgroundColor: Colors.primary500,
    elevation: 2,

    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.primary100,
  },
  pressed: {
    opacity: 0.8,
  },
});
