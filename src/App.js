import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Burger from './components/Burger/Burger';
import Dessert from './components/Dessert/Dessert';
import Boisson from "./components/Boisson/Boisson";
import Pizza from "./components/Pizza/Pizza";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route  path="/Burgers" element={<Burger />} />
        <Route  path="/Boissons" element={<Boisson />} />
        <Route  path="/Pizzas" element={<Pizza />} />
        <Route  path="/Desserts" element={<Dessert />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
