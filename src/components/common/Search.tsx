import React from "react";
import { IonInput, IonItem } from "@ionic/react";
import { useProductContext } from "../../context/ProductContext";

export const ButtonSearch: React.FC = () => {
  const { filterProducts } = useProductContext();

  const onChange = (e: any) => {
    filterProducts(e.target.value);
  };

  return (
    <div className="md:w-[500px] md:h-12 ">
      <IonItem className="flex items-center p-0">
        <div className="flex items-center bg-white px-4 md:py-6 border border-gray-400 rounded-full w-[400] md:w-full h-10 focus-within:outline-none">
          <IonInput
            type="text"
            placeholder="Buscar..."
            onIonInput={onChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </IonItem>
    </div>
  );
};
