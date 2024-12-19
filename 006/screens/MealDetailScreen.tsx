import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import Chip from "@/components/Chip";
import List from "@/components/List";
import MealItem from "@/components/MealItem";
import { MEALS } from "@/data/dummy-data";
import HomeButton from "@/components/HomeButton";
import Favorite from "@/components/Favorite";

export default function MealDetailScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const mealId = params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginRight: 10,
          }}
        >
          {typeof mealId === "string" && <Favorite mealId={mealId} />}
          <HomeButton />
        </View>
      ),
    });
  }, [selectedMeal]);

  if (!selectedMeal) {
    return <Text style={{ color: "#fff" }}>Meal not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <MealItem
          meal={selectedMeal}
          style={{
            height: 120,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          showImage={false}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <Chip>
          {selectedMeal.isGlutenFree && (
            <Chip.Item style={{ backgroundColor: "#fa0" }}>
              Gluten-free
            </Chip.Item>
          )}
          {selectedMeal.isVegan && (
            <Chip.Item style={{ backgroundColor: "darkgreen" }}>
              Vegan
            </Chip.Item>
          )}
          {selectedMeal.isVegetarian && (
            <Chip.Item style={{ backgroundColor: "green" }}>
              Vegetarian
            </Chip.Item>
          )}
        </Chip>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailItem}>Ingredients:</Text>
        <List>
          {selectedMeal.ingredients.map((ingredient) => (
            <List.Item key={ingredient}>{ingredient}</List.Item>
          ))}
        </List>
        <Text style={styles.detailItem}>Steps:</Text>
        <List>
          {selectedMeal.steps.map((step, idx) => (
            <List.Item key={step}>
              {idx + 1}. {step}
            </List.Item>
          ))}
        </List>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    marginBottom: 50,
  },
  imageContainer: {
    width: "100%",
    position: "relative",
  },
  mealItemContainer: {
    width: "100%",
    maxWidth: 800,
    marginHorizontal: "auto",
    padding: 24,
    alignItems: "stretch",
  },
  image: {
    width: "100%",
    height: 350,
  },
  headerContainer: {
    backgroundColor: "#222222",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  details: {
    padding: 10,
  },
  detailItem: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
