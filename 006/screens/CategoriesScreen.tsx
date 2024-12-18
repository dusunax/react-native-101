import { FlatList} from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import CategoryGridTile from "@/components/CategoryGridTile";
import { router } from "expo-router";

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
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}
