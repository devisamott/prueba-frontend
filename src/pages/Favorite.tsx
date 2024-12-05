import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Header } from "../components/layout/Header";
import FavoriteProducts from "../components/favorites/FavoriteProducts";

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