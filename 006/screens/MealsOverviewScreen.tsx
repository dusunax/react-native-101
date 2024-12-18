import { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import type Meal from "@/models/meal";
import MealItem from "@/components/MealItem";

function renderMealItem(itemData: { item: Meal }) {
  return <MealItem meal={itemData.item} />;
}

export default function MealsOverviewScreen() {
  const params = useLocalSearchParams();
  const categoryId = params.categoryId;

  const navigation = useNavigation();
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  )?.title;

  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle]);

  const displayedMeals = MEALS.filter((meal) => {
    if (typeof categoryId === "string") {
      return meal.categoryIds.indexOf(categoryId) >= 0;
    }
    return false;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
  },
});
