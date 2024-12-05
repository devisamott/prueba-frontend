import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchProducts } from "../../service/apiService";
import { Header } from "../layout/Header";
import { ButtonBack } from "../common/ButtonBack";
import { Skeleton } from "../common/Skeleton";
import { ImageCarousel } from "../ui/ImageCarrousel";
import { ProductDetails } from "./ProductDetails";

interface Product {
  _id: number;
  imagenes: string[];
  titulo: string;
  precio: string;
  descripcion: string;
  savedAt?: string;
}

const ProductInfoComponent: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchProductData();
      setLoading(false);
    };

    fetchData();
  }, [productId]);

  const fetchProductData = async () => {
    try {
      const products = await fetchProducts();
      const selectedProduct = products.find((product: Product) =>
        product._id === Number(productId)
      );
      if (selectedProduct) {
        setProduct({ ...selectedProduct, savedAt: selectedProduct.savedAt || "" });
      } else {
        console.warn("Producto no encontrado");
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <section>
      <Header />
        <div className="absolute left-0 md:left-14 md:top-40">
          <ButtonBack />
        </div>
        <div className="p-4 flex flex-col justify-center items-center gap-x-16 mt-16">
          {product ? (
            <>
              <ImageCarousel images={product.imagenes} />
              <ProductDetails product={product} productId={productId} />
            </>
          ) : (
            <div>Producto no encontrado</div>
          )}
        </div>
    </section>
  );
};

export default ProductInfoComponent;
