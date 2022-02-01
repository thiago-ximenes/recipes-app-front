import React from 'react';
import './App.css';
import GlobalProvider from './Context/GlobalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
