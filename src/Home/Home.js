import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/New_Creative/V184735274_WLM_Redmi_T9B_Desktop_TallHero_1500x600._CB405044906_.jpg"
        alt="home__image"
        className="home__image"
      />

      <div className="home__row">
        {/* Product id title , price, rating, image */}
        <Product
          id={0}
          title="the Lean Startup: How Constant is the "
          rating={3}
          price={33.5}
          image="https://images-na.ssl-images-amazon.com/images/I/61tDBLh9ijL._SL1000_.jpg"
        />

        <Product
          id={1}
          title="BKN® Fitness Watch Band Strap for Xiaomi Mi Band 3 & Band 4 (Device not Included)"
          rating={3}
          price={3.5}
          image="https://images-na.ssl-images-amazon.com/images/I/41sJizHm6qL.jpg"
        />

        {/* Product */}
      </div>

      <div className="home__row">
        <Product
          id={3}
          title="Dark Fantacy Choco Fills Cookies"
          rating={4}
          price={2.5}
          image="https://images-eu.ssl-images-amazon.com/images/I/419KuN7G6KL._AC_SY200_.jpg"
        />

        <Product
          id={5}
          title="INNOVATIVE TEACHING"
          rating={4}
          price={5.5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41DV9e5-+WL._AC_SY200_.jpg"
        />

        <Product
          id={6}
          title="RSC POWER+ Compatible Dash/Warp Data Sync Fast Charging Cable Supported for All C Type Devices (Red and White)
          RSC POWER+ Compatible Dash/Warp Data Sync Fast Charging Cable Supported for All C Type Devices…"
          rating={3}
          price={33.5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61kDkwEoFlL._AC_UL270_SR270,270_.jpg"
        />

      </div>

      <div className="home__row">
        <Product
          id={7}
          title="the Lean Startup: How Constant is the "
          rating={3}
          price={33.5}
          image="https://images-na.ssl-images-amazon.com/images/I/61tDBLh9ijL._SL1000_.jpg"
        />

            
      </div>
    </div>
  );
}

export default Home;
