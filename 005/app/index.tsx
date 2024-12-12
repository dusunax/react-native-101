import { useState } from "react";
import { View, StyleSheet } from "react-native";
import GameOverScreen from "@/screens/GameOverScreen";
import UserInputScreen from "@/screens/UserInputScreen";
import CommonLayout from "@/components/layout/CommonLayout";
import GamePlayScreen from "@/screens/GamePlayScreen";

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  const gameStartHandler = (number: number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const guessRoundUp = (number: number) => {
    setGuessRounds((prev) => [...prev, number]);
  };

  const gameRestartHandler = () => {
    setUserNumber(null);
    setGuessRounds([]);
  };

  return (
    <CommonLayout>
      <View style={styles.rootScreen}>
        {userNumber === null && (
          <UserInputScreen gameStartHandler={gameStartHandler} />
        )}
        {userNumber !== null && (
          <GamePlayScreen
            userNumber={userNumber}
            setGameIsOver={setGameIsOver}
            guessRoundUp={guessRoundUp}
            gameIsOver={gameIsOver}
          />
        )}
        {userNumber !== null && gameIsOver && (
          <GameOverScreen
            guessRounds={guessRounds}
            userNumber={userNumber}
            onRestart={gameRestartHandler}
          />
        )}
      </View>
    </CommonLayout>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    display: "flex",
    gap: 16,
  },
});
