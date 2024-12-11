import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LinearGradient colors={["#384B70", "#1A1A1D"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
    width: "100%",
    height: "100%",
  },
});
