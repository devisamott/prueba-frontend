import React from "react";
import { IonInput, IonItem } from "@ionic/react";
import { useProductContext } from "../ProductContext";

export const ButtonSearch: React.FC = () => {
  const { filterProducts } = useProductContext();

  const onChange = (e: any) => {
    filterProducts(e.target.value);
  };

  return (
    <div className="md:w-[600px] md:h-14 mb-2">
      <IonItem>
        <IonInput
          type="text"
          placeholder="     Buscar..."
          className="bg-white border border-gray-400 h-10 md:w-full md:h-16 rounded-full pl-4 w-[220px] focus:outline-none"
          onIonInput={onChange}
        />
      </IonItem>
    </div>
  );
};
