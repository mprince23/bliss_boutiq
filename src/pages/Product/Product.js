import React from "react";
import ProductListing from "../../components/Home/ProductListing";
import Product from "../../components/product/Product";
import Hero from "../../components/product/Hero";
import CategorySection from "../../components/product/CategorySection";
import img from "../../assets/images/product/hero/1.webp";

const ProductPage = () => {
  return (
    <div>
      <Hero img={img} />
      <CategorySection />
      <Product />
    </div>
  );
};

export default ProductPage;
