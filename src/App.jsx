import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la Tienda Mágica, todo sobre Harry Potter!" />
    </div>
  );
};

export default App;
