import { FlatList} from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import CategoryGridTile from "@/components/CategoryGridTile";

function renderGridItem(itemData: { item: Category }) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
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
