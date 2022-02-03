import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import GlobalProvider from './Context/GlobalProvider';
import Routes from './Routes/Routes';
import MyHeaderSearchProvider
from './Context/MyHeaderSearchContext/MyHeaderSearchProvider';

function App() {
  return (
    <GlobalProvider>
      <MyHeaderSearchProvider>
        <Routes />
      </MyHeaderSearchProvider>
    </GlobalProvider>
  );
}

export default App;
