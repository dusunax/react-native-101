import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const onPress = () => {
    console.log("Pressed");
  };

  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccccc55" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
          { backgroundColor: color },
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    height: "100%",
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
