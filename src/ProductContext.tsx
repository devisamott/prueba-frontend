import React, { useEffect, useState, useContext, createContext } from "react";
import { fetchProducts } from "./service/apiService";

export interface Product{
    _id: string;
    imagen: string;
    titulo: string;
    descripcion: string;
    precio: string;
    savedAt?: string;
}

interface ProductContextProps{
    products: Product[];
    filteredProducts: Product[];
    filterProducts: (searchTerm: string) => void;
    fetchAllProducts: () => Promise<void>
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ filteredProducts, setFilteredProducts ] = useState<Product[]>([]);

    const fetchAllProducts = async () => {
        if (products.length === 0) {
            try {
              const data = await fetchProducts();
              setProducts(data);
              setFilteredProducts(data);
            } catch (error) {
              console.error(error);
            }
          }
    }

    const filterProducts = (searchTerm: string) => {
        const lowerCaseSearch = searchTerm.toLowerCase();
        const filtered = products.filter((product: Product) => product.titulo.toLowerCase().includes(lowerCaseSearch));
        setFilteredProducts(filtered);
    }

    useEffect(()=> {
        fetchAllProducts()
    }, [])

    return(
        <ProductContext.Provider value = {{ products, filteredProducts, filterProducts, fetchAllProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
  };