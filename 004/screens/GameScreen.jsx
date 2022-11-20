import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({
  userNumber,
  boundary,
  onGameOver,
  turnCount,
  onNextTrun,
  setBoundary,
}) {
  const initialGuess = generateRandBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  /** nextGuess를 설정합니다.
   * ('up' | 'down') => void*/
  function nextGuessHandler(direction) {
    console.log("컴퓨터" + currentGuess, "나" + userNumber);
    if (
      (direction === "down" && currentGuess < userNumber) ||
      (direction === "up" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "아닌데요! 😲",
        `잊으셨다면 입력한 숫자는 ${userNumber}입니다.`,
        [{ text: "아 맞다!", style: "destructive" }]
      );
      return;
    }

    let newRandNum;
    if (direction === "down") {
      setBoundary((prev) => ({ ...prev, max: currentGuess }));
      newRandNum = generateRandBetween(
        boundary.min,
        currentGuess,
        currentGuess
      );
    } else {
      setBoundary((prev) => ({ ...prev, min: currentGuess + 1 }));
      newRandNum = generateRandBetween(
        currentGuess + 1,
        boundary.max,
        currentGuess
      );
    }
    console.log(boundary, direction);
    onNextTrun();
    setCurrentGuess(newRandNum);
  }

  useEffect(() => {
    if (currentGuess === userNumber && userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>정답은 {currentGuess}일까요?🤔</Title>

      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>

        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "up")}>
            up 올려! 📈
          </PrimaryButton>

          <PrimaryButton onPress={nextGuessHandler.bind(this, "down")}>
            down 내려! 📉
          </PrimaryButton>
        </View>

        <View>
          <Title>Round {turnCount}</Title>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
  },
});
