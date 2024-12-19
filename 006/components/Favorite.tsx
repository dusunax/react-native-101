import { useContext, useState } from "react";
import { Pressable, View, ViewStyle } from "react-native";
import { FavoriteMealsContext } from "@/context/FavoriteMealsContext";
import { Ionicons } from "@expo/vector-icons";

export default function Favorite({
  mealId,
  style,
}: {
  mealId: string;
  style: ViewStyle;
}) {
  const favoriteMealsCtx = useContext(FavoriteMealsContext);
  const [isFavoriteState, setIsFavoriteState] = useState(
    typeof mealId === "string" ? favoriteMealsCtx?.ids.includes(mealId) : false
  );

  const toggleFavorite = () => {
    if (favoriteMealsCtx && typeof mealId === "string") {
      if (isFavoriteState) {
        favoriteMealsCtx.removeFavorite(mealId);
      } else {
        favoriteMealsCtx.addFavorite(mealId);
      }
      setIsFavoriteState(!isFavoriteState);
    }
  };

  return (
    <View style={style}>
      <Pressable onPress={toggleFavorite}>
        <Ionicons
          name={isFavoriteState ? "star" : "star-outline"}
          size={20}
          color="#fa0"
        />
      </Pressable>
    </View>
  );
}
