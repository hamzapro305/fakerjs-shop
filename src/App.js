import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAllProducts } from "./store/products/products";
import { useDispatch } from "react-redux";
import SingleProduct from "./Components/SingleProduct";

const App = () => {
  const dispatch = useDispatch()
  dispatch(getAllProducts())
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Products-Page" element={<Products />} />
          <Route path="/" element={<></>} />
          <Route path="/single-product/:id/:category/:name" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
