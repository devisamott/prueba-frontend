import React from "react";
import { Product } from "../../context/ProductContext";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";

interface HeartProps {
    productId: string;
    product: Product;
}

export const Heart: React.FC<HeartProps> = ({ productId, product }) => {
    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
    const isFavorite = favorites.some((fav) => fav._id.toString() === productId);

    const handleClick = () => {
        if (isFavorite) {
            removeFavorite(productId);
        } else {
            addFavorite(product);
        }
    };

    return (
        <div className="ml-auto md:mr-7 md:mt-4">
            <IonIcon
                icon={isFavorite ? heart : heartOutline}
                className="md:w-12 md:h-12 size-6 cursor-pointer hover:text-red-600 bg-gray-300 p-2 rounded-full"
                onClick={handleClick}
            />
        </div>
    );
};
