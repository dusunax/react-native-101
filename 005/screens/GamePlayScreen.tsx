import Card from "@/components/ui/Card";
import SubText from "@/components/ui/SubText";
import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

function generateRandomNumberBetween(
  min: number,
  max: number,
  exclude: number
) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;

  if (rand === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  }
  return rand;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GamePlayScreen({
  userNumber,
  setGameIsOver,
  guessRoundUp,
  gameIsOver,
}: {
  userNumber: number;
  setGameIsOver: (isOver: boolean) => void;
  guessRoundUp: (number: number) => void;
  gameIsOver: boolean;
}) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const nextGuess = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("거짓말하지 마세요!", "숫자가 너무 크거나 작아요.", [
        { text: "미안", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuess);
    guessRoundUp(newGuess);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, userNumber]);

  return (
    <Card>
      <Title>혹시 이 숫자인가요?</Title>
      <SubText>Higher or Lower?</SubText>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View
        style={[styles.buttonsContainer, gameIsOver && styles.buttonDisabled]}
      >
        <PrimaryButton onPress={() => nextGuess("lower")}>
          <Ionicons name="caret-down" size={16} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuess("higher")}>
          <Ionicons name="caret-up" size={16} color="white" />
        </PrimaryButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    fontSize: 60,
  },
  buttonDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
});
