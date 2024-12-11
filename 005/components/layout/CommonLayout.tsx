import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/color";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.tertiary]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={[styles.rootScreen, styles.paddingContainer]}
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
  paddingContainer: {
    padding: 24,
    paddingHorizontal: 36,
  },
  backgroundImage: {
    opacity: 0.7,
    width: "100%",
    height: "100%",
  },
});
