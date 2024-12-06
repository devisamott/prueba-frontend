import React from "react";
import { useHistory } from "react-router";
import { useProductContext } from "../../context/ProductContext";
import { Heart } from "../common/Heart";
import { ImageWithSkeleton } from "../ui/ImagesWithSkeleton";

export const ProductList: React.FC = () => {
  const { filteredProducts } = useProductContext();
  const history = useHistory();

  const hanldeClick = (productId: number) => {
    history.push(`/product-info/${productId}`)
  }

  return (
   <div className="grid grid-cols-2 md:grid-cols-2 gap-8 p-4 lg:w-[1080px] ml-auto mr-auto mt-8">
      {filteredProducts.map((product) =>{
       return(
        
         <div key={product._id.toString()} className="lg:w-[500px] cursor-pointer flex flex-col items-center border p-4 rounded-lg shadow-lg md:shadow-xs md:border-none">   
             <Heart productId={product._id} product={product}/>
             <ImageWithSkeleton
               src={product.imagen} 
               alt={product.titulo}
               onClick={()=>hanldeClick(Number(product._id))} />
           <h3 className="mt-4 md:text-xl font-semibold text-center">{product.titulo}</h3>
           <p className="font-medium">${product.precio}</p>
         </div>
       )
})}
   </div>
  );
};
 