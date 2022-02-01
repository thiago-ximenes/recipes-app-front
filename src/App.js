import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './Context/GlobalProvider';
import Login from './Components/Login';
// import Routes from './Routes/Routes';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
