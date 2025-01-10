// import React, { useEffect } from "react";
// import Home from "./pages/Home/Home";
// import Header from "./components/global/header/Header";
// import Footer from "./components/global/footer/Footer";
// import MyData from "./components/profile/MyData";
// import { Route, Routes, useLocation } from "react-router-dom";
// import OrderHistory from "./components/profile/OrderHistory";
// import MyWishlist from "./components/profile/MyWishlist";
// import Offer from "./components/profile/Offer";
// import Login_form from "./pages/login-form/Login_form";
// import Register_form from "./pages/Registration_form/Register_form";
// import Contact from "./pages/contact/Contact";
// import CartPage from "./components/cart/CartPage";
// import SingleProduct from "./components/Home/SingleProduct";
// import Profile from "./pages/profile/Profile";
// import { RecoilRoot } from "recoil";
// import ProductPage from "./pages/Product/Product";
// import Form from "./pages/form/Form";
// import { ToastContainer } from "react-toastify";
// import Loader from "./Loader";

// function App() {
//   function ScrollToTop() {
//     const { pathname } = useLocation();
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
//     return null;
//   }

//   return (
//     <>
//     {/* <Loader /> */}
//      <ToastContainer />
//       <RecoilRoot>
//         <Header />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Form />} />
//           <Route path="/myData" element={<MyData />} />
//           <Route path="/orderHistory" element={<OrderHistory />} />
//           <Route path="/myWishilist" element={<MyWishlist />} />
//           <Route path="/offer" element={<Offer />} />
//           <Route path="/login" element={<Login_form />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/signUp" element={<Register_form />} />
//           <Route path="/singleProduct/:id" element={<SingleProduct />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <Footer />
//       </RecoilRoot>
//       {/* <Form /> */}
//     </>
//   );
// }
// export default App;


import React, { useEffect, useState } from "react";
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
import { RecoilRoot } from "recoil";
import ProductPage from "./pages/Product/Product";
import Form from "./pages/form/Form";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <>
      {loading ? (
        <Loader /> // Show loader for 3 seconds
      ) : (
        <>
          <ToastContainer />
          <RecoilRoot>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Form />} />
              <Route path="/myData" element={<MyData />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/myWishilist" element={<MyWishlist />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/login" element={<Login_form />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signUp" element={<Register_form />} />
              <Route path="/singleProduct/:id" element={<SingleProduct />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </RecoilRoot>
        </>
      )}
    </>
  );
}

export default App;
