import GamePlayScreen from "./screens/game_play";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient colors={["#384B70", "#1A1A1D"]} style={styles.gradient}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <GamePlayScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
    width: "100%",
    height: "100%",
  },
});
