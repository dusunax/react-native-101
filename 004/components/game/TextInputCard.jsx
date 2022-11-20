import { StyleSheet, View, Text, TextInput } from "react-native";

import Card from "../ui/Card";
import PrimaryButton from "../ui/PrimaryButton";

import { Colors } from "../../constants/colors";

export default function TextInputCard({
  onConfirmPress,
  onResetPress,
  onNumberInput,
  enteredNum,
}) {
  return (
    <Card>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onNumberInput}
        value={enteredNum}
        autoFocus={true}
      />

      <View style={styles.buttonConatiner}>
        <View style={styles.button}>
          <PrimaryButton onPress={onResetPress}>Reset</PrimaryButton>
        </View>

        <View style={styles.button}>
          <PrimaryButton onPress={onConfirmPress}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,

    fontSize: 32,
    fontWeight: "bold",

    color: Colors.primary500,
    borderBottomColor: Colors.primary300,
    borderBottomWidth: 2,
    textAlign: "center",
  },
  buttonConatiner: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
