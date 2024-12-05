import React from "react";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { FavoriteItem } from "./FavoriteItem";
import { EmptyFavoritesMessage } from "./EmptyFavoritesMessage";

export const FavoriteItemsList: React.FC = () => {
  const { favorites, removeFavorite } = useFavoritesContext();

  if (!favorites || favorites.length === 0) {
    return <EmptyFavoritesMessage />;
  }

  return (
    <div className="mt-8">
      {favorites.map((product) => (
        <FavoriteItem key={product._id} product={product} onRemove={removeFavorite} />
      ))}
    </div>
  );
};
