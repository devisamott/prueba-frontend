import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./ProductContext";

interface FavoriteProductsProps{
    favorites: Product[];
    addFavorite: ( product: Product) => void;
    removeFavorite: ( productId: string ) => void;
}

const FavoriteContext = createContext< FavoriteProductsProps | undefined >(undefined);

export const FavoritesProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ favorites, setFavorites ] = useState<Product[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      } catch (error) {
        console.error("Error parsing favorites from localStorage", error);
        setFavorites([]);
      }
    }
  }, [])

      const addFavorite = (product: Product) => {
        const currentDate = new Date().toISOString();
        const productWithDate = {
          ...product,
          savedAt: currentDate,
        };
        
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        
        storedFavorites.push(productWithDate);
        
        localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      
        setFavorites(storedFavorites);
      };

      const removeFavorite = (productId: string) => {
        setFavorites((prevFavorites) => {
          const updatedFavorites = prevFavorites.filter((product) => product._id !== productId);
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          return updatedFavorites;
        });
      };

    return(
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavoritesContext = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
      throw new Error("useFavoritesContext must be used within a FavoritesProvider");
    }
    return context;
  };