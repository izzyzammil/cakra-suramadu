import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Gadgets from "./pages/Gadgets";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Gallery from "./pages/Gallery";
import Berita from "./pages/Berita";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
