//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import React from 'react';
import {
  //BrowserRouter,
  Routes,
  Route,
  HashRouter,
  //Link
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
  return (
    <>
      <HashRouter basename="/">
      <Navbar/>
      <Alert alert={alert}/>
        <div className="container">
        <Routes>
          
          <Route exact path="/" element={<Textform  showAlert={showAlert}/>} />
          
          <Route exact path="about" element={<About />} />
        </Routes>
        </div>
        </HashRouter>
    </>
  );
}

export default App;
