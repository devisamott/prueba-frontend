import React, { useState } from "react";

interface FavoriteItemProps {
  product: {
    _id: string;
    imagen: string;
    titulo: string;
    precio: number;
    savedAt?: string;
  };
  onRemove: (productId: string) => void;
  fallbackSrc?: string;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = ({ product, onRemove, fallbackSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true); 
    if (fallbackSrc) {
      setIsLoaded(true);
    }
  };

  return (
    <div className="flex mt-2 justify-center items-center gap-6 border-t border-gray-200 bg-gray-100 py-8 px-4">
      <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
        )}
        <img
          src={hasError && fallbackSrc ? fallbackSrc : product.imagen}
          alt={product.titulo}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold md:text-xl">{product.titulo}</h3>
        <p className="md:text-xl">Precio: ${product.precio}</p>
        <p className="text-sm md:text-xl">
          Guardado en:{" "}
          {product.savedAt ? new Date(product.savedAt).toLocaleString() : "Fecha no disponible"}
        </p>
      </div>
      <button
        className="border bg-gray-300/50 w-12 h-8 rounded-full hover:bg-red-500 md:w-16 md:h-16"
        onClick={() => onRemove(product._id)}
        aria-label={`Eliminar ${product.titulo} de favoritos`}
      >
        <span className="font-bold text-xl">x</span>
      </button>
    </div>
  );
};
