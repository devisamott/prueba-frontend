import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <ProductList/>
      </IonContent>
    </IonPage>
  );
};

export default Home;