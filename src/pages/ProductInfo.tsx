import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import ProductInfoComponent from "../components/product/ProductInfoComponent"

const ProductInfo: React.FC = ( ) => {
  return(
    <IonPage>
      <IonContent>
        <ProductInfoComponent/>
      </IonContent>
    </IonPage>
  )
}

export default ProductInfo