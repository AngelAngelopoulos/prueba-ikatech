import './App.css';
import { OfferBanner } from './components/OfferBanner';
import { NavigationBar } from './components/NavigationBar';
import { LinkContent } from './interfaces/Button';
import { MainHeader } from './components/MainHeader';
import { MainFooter } from './components/MainFooter';
import { FooterBar } from './components/FooterBar';
import CalzadoPage from './pages/Calzado';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ZapatoPage } from './pages/Zapato';
import { Provider } from 'react-redux';
import { cartStore, persistor } from './stores/cart';
import { PersistGate } from 'redux-persist/integration/react';


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <CalzadoPage />

  },
  {
    path: '/:id',
    element:
      <ZapatoPage />
  }
]);

function App() {

  const linkList: Array<LinkContent> = [
    {
      title: 'directorio de tiendas',
      link: ''
    },
    {
      title: 'servicio al cliente',
      link: ''
    },
    {
      title: 'mi cuenta',
      link: ''
    }
  ]

  return (
    <div className="App">
      <Provider store={cartStore}>
        <PersistGate loading={null} persistor={persistor}>

          <OfferBanner text={`Hot sale -30% en sandalias`} />
          <NavigationBar links={linkList} />
          <MainHeader />
          <RouterProvider router={router} />

          <MainFooter />
          <FooterBar />
        </PersistGate>
      </Provider>

    </div>
  );
}

export default App;
