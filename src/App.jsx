import React from 'react';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';
import StoreProvider from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Main />
      <Footer />
    </StoreProvider>
  );
}

export default App;