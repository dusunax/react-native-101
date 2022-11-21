import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import InfoCard from "../components/game/InfoCard";
import TextInputCard from "../components/game/TextInputCard";

import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNum, setEnteredNum] = useState();

  const numberInputHandler = (userInput) => {
    setEnteredNum(userInput);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNum);
    const hasError = inputErrorHandler(chosenNumber);
    if (hasError) return;

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNum("");
  };

  function inputErrorHandler(chosenNumber) {
    let alertOption = [
      "error msg here",
      "1부터 99까지의 숫자를 입력 해주세요.",
      [{ text: "오케이", style: "destructive", onPress: resetInputHandler }],
    ];

    if (enteredNum === "") {
      alertOption[0] = "숫자를 적어주세요 🙂";
      Alert.alert(...alertOption);
      return true;
    } else if (isNaN(chosenNumber)) {
      alertOption[0] = "숫자가 아닙니다 😮";
      Alert.alert(...alertOption);
      return true;
    } else if (chosenNumber <= 0 || chosenNumber > 99) {
      alertOption[0] = "숫자는 1 ~ 99 🙂";
      Alert.alert(...alertOption);
      return true;
    }
    return false;
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>

      <Title>🧮 숫자를 입력하세요! 🧮</Title>
      <InfoCard />

      <TextInputCard
        onConfirmPress={confirmInputHandler}
        onResetPress={resetInputHandler}
        onNumberInput={numberInputHandler}
        enteredNum={enteredNum}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 100,
  },
});
