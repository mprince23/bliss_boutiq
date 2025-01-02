import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
import MyData from "./components/profile/MyData";
import { Route, Routes, useLocation } from "react-router-dom";
import OrderHistory from "./components/profile/OrderHistory";
import MyWishlist from "./components/profile/MyWishlist";
import Offer from "./components/profile/Offer";
import Login_form from "./pages/login-form/Login_form";
import Register_form from "./pages/Registration_form/Register_form";
import Contact from "./pages/contact/Contact";
import CartPage from "./components/cart/CartPage";
import SingleProduct from "./components/Home/SingleProduct";
import Profile from "./pages/profile/Profile";
import Product from "./components/product/Product";
import { RecoilRoot } from "recoil";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <>
     
      <RecoilRoot>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myData" element={<MyData />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/myWishilist" element={<MyWishlist />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/login" element={<Login_form />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signUp" element={<Register_form />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </RecoilRoot>
    </>
  );
}

export default App;
