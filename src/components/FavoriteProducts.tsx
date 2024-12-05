import React from "react";
import { ButtonBack } from "../components/ButtonBack";
import { FavoriteItemsList } from "./FavoriteItemList";

const FavoriteProducts: React.FC = () => {
  return (
    <section>
      <div className="md:mt-4">
        <ButtonBack />
      </div>
      <FavoriteItemsList />
    </section>
  );
};

export default FavoriteProducts;
