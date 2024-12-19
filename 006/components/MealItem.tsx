import type Meal from "@/models/meal";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import { router } from "expo-router";
import Favorite from "./Favorite";

export default function MealItem({
  meal,
  style,
  showImage = true,
}: {
  meal: Meal;
  style?: StyleProp<ViewStyle>;
  showImage?: boolean;
}) {
  const pressHandler = () => {
    router.push(`/meal-detail?mealId=${meal.id}`);
  };

  return (
    <View style={[styles.mealItem, style]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          {showImage && (
            <View style={{ position: "relative" }}>
              <Image source={{ uri: meal.imageUrl }} style={styles.image} />
              <Favorite
                mealId={meal.id}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 100,
                  elevation: 10,
                  backgroundColor: "#222",
                  borderRadius: 100,
                  padding: 5,
                }}
              />
            </View>
          )}
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>{meal.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    maxWidth: 800,
    marginHorizontal: "auto",
    padding: 24,
  },
  innerContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  image: {
    width: "100%",
    paddingBottom: "72.5%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 6,
    padding: 8,
    gap: 4,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 10,
    color: "gray",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
