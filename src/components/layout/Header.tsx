import React from "react";
import { IonHeader, IonToolbar, IonRouterLink } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import { ButtonSearch } from "../common/Search";
import { Logo } from "../common/Logo";
import { Cart } from "../cart/Cart";

export const Header: React.FC = () => {
    
    const history = useHistory();
    const location = useLocation();
  
    const handleLogoClick = (e: React.MouseEvent) => {
      if (location.pathname !== "/") {
        history.push("/"); 
      } 
      e.preventDefault(); 
    };
  
    const handleCartClick = (e: React.MouseEvent) => {
      if (location.pathname !== "/favorites") {
          history.push("/favorites"); 
      }
      e.preventDefault(); 
    }
  return (
    <IonHeader>
      <IonToolbar className="md:h-[100px] h-[70px] flex justify-center">
        <div className="flex justify-around xl:w-[1000px] md:h-16 md:ml-auto md:mr-auto items-center mt-3">
          <IonRouterLink href="/" onClick={handleLogoClick}>
            <Logo />
          </IonRouterLink>
          <ButtonSearch />
          <IonRouterLink href="/favorites" onClick={handleCartClick}>
            <Cart />
          </IonRouterLink>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
