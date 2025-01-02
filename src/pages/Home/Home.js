import React from "react";
import "../../assets/styles/home.css";
import MainSlider from "../../components/Home/MainSlider";
import ProductImages from "../../components/Home/ProductGrid";
import Category from "../../components/Home/Category";
import Category2 from "../../components/Home/Category2";
import HandPickedForYou from "../../components/Home/HandPickedForYou";
import SingleProduct from "../../components/Home/SingleProduct";
import ProductListing from '../../components/Home/ProductListing';
import TrendingHeroSection from '../../components/Home/TrendingHeroSection';
import trending1 from "../../assets/images/Home/trendingHeroSection/trending1.png";
import restrending1 from "../../assets/images/Home/resTrending/restrending1.png";
import trending2 from "../../assets/images/Home/trendingHeroSection/trending2.png";
import restrending2 from "../../assets/images/Home/resTrending/restrending2.png";
import trending3 from "../../assets/images/Home/trendingHeroSection/trending3.png";
import restrending3 from "../../assets/images/Home/resTrending/restrending3.png";

const Home = () => {
  return (
    <>
      <MainSlider />
      <Category2 />
      {/* <Category /> */}
      <TrendingHeroSection
        img={trending1}
        resImg={restrending1}
        title={"FROM DAY TO NIGHT"}
        heading={"THE EPILTOME OF VERSATILITY"}
        btnText={"SHOP CHINOS"}
        align={"left"}
        textColor={"white"}
      />
      <ProductImages />
      <TrendingHeroSection
        img={trending2}
        resImg={restrending2}
        title={"ETERNAL STAPLES"}
        heading={"POLO PERFECTION"}
        btnText={"SHOP NOW"}
        align={"left"}
        textColor={"white"}
      />
      <HandPickedForYou />

      <TrendingHeroSection
        img={trending3}
        resImg={restrending3}
        title={""}
        heading=<p>COOL <br />CALM,<br /> CASUAL</p>
        btnText={"SHOP SUMMER OUTFITS"}
        align={"right"}
        textColor={"black"}
      />

    </>
  );
};

export default Home;
