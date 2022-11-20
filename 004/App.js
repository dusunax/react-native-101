import { useState } from "react";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [boundary, setBoundary] = useState({ min: 0, max: 100 });

  // screens 설정
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber)
    screen = (
      <GameScreen
        userNumber={userNumber}
        boundary={boundary}
        setBoundary={setBoundary}
        onGameOver={gameOverHandler}
        turnCount={turnCount}
        onNextTrun={nextTurnHandler}
      />
    );

  if (gameIsOver) {
    screen = (
      <GameOverScreen turnCount={turnCount} onRestart={restartGameHandler} />
    );
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function pickedNumberHandler(pickedNumber) {
    setGameIsOver(false);
    setUserNumber(pickedNumber);
  }

  function nextTurnHandler() {
    setTurnCount(turnCount + 1);
  }

  function restartGameHandler() {
    setGameIsOver(false);
    setTurnCount(0);
    setUserNumber("");
  }

  return (
    <LinearGradient colors={["#eef", "#dbcfed"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/splash/profile.png")}
        resizeMode="center"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.5,
  },
});
