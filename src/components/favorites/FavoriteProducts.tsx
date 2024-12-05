import React from "react";
import { ButtonBack } from "../common/ButtonBack";
import { FavoriteItemsList } from "../favorites/FavoriteItemList";

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
