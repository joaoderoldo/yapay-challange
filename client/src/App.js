import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './contexts';

import GlobalStyle from './assets/styles/GlobalStyle';
import Routes from './routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
