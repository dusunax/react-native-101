import React, { createContext, useState, ReactNode } from "react";

interface FavoriteMealsContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoriteMealsContext = createContext<
  FavoriteMealsContextType | undefined
>(undefined);

export const FavoriteMealsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  };

  return (
    <FavoriteMealsContext.Provider
      value={{ ids: favoriteMealIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteMealsContext.Provider>
  );
};
