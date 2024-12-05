import React , {Suspense} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ProductProvider } from './ProductContext';
import { FavoritesProvider } from './FavoritesContext';
import { Skeleton } from './components/Skeleton';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/NotFound';

const Home = React.lazy(() => import('./pages/Home'));
const ProductInfo = React.lazy(() => import('./pages/ProductInfo'));
const Favorite = React.lazy(() => import('./pages/Favorite'));

setupIonicReact();

const App: React.FC = () => (
  <IonApp >
    <ErrorBoundary>
      <ProductProvider>
        <FavoritesProvider>
          <IonReactRouter>
            <Suspense fallback={<Skeleton/>}>
              <IonRouterOutlet>
                <Route
                  exact
                  path="/home"
                  component={Home}
                />
                <Route
                  exact
                  path="/product-info/:productId"
                  component={ProductInfo}
                />
                <Route
                  exact
                  path="/favorites"
                  component={Favorite}
                />
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route >
                  <NotFound/>
                </Route>
              </IonRouterOutlet>
            </Suspense>
          </IonReactRouter>
        </FavoritesProvider>
      </ProductProvider>
    </ErrorBoundary>
  </IonApp>
);

export default App;

