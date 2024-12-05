import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import FavoriteProducts from "../components/FavoriteProducts";
import { Header } from "../components/Header";

const Favorite:React.FC = () => {
  return(
    <IonPage>
      <Header/>
      <IonContent fullscreen>
          <FavoriteProducts/>
      </IonContent>
    </IonPage>
  )
}

export default Favorite;