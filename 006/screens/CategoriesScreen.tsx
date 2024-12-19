import { FlatList, View } from "react-native";
import { router } from "expo-router";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import CategoryGridTile from "@/components/CategoryGridTile";

function renderGridItem(itemData: { item: Category }) {
  const pressHandler = () => {
    router.push(`/meals-overview?categoryId=${itemData.item.id}`);
  };

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}

export default function CategoriesScreen() {
  return (
    <View style={{ backgroundColor: "#222222" }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
}
