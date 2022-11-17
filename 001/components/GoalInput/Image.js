import { View, Image, StyleSheet } from "react-native";

export default function ImageComponent() {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require(`./../../assets/images/free-icon-idea-8910811.png`)}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: -70,
    marginLeft: "30%",
  },
});
