import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "../Subtotal/Subtotal";
import { SvgIcon } from "@material-ui/core";

function Checkout() {
  const [{ basket }] = useStateValue();

  var storedNames = JSON.parse(localStorage.getItem("myData"));
  console.log(storedNames);
  let dat = 0;

  if (storedNames != null) {
    dat = storedNames.length;
  } else {
    dat = 0;
  }

  return (
    <div className="checkout">
      <img
        className="ad__image"
        src="https://www.freewebheaders.com/wp-content/gallery/arts-entertainment-size-1024x300/fantasy-guitarist-girl-on-black-background-header_size-1024x300.jpg"
        alt="here Rund the add content from google and others"
      />

      <div className="content__cart">
        {dat === 0 ? (
          <div className="empty__cart">
            <h2>
              Your shopping cart is empty.
              <h4>
                Please to goto{" "}
                <Link to="/">
                  <span className="home__logo">🏠</span>
                </Link>{" "}
                and add some item to the shopping cart. and do remember to give
                review.
              </h4>
            </h2>
          </div>
        ) : (
          <div className="items_cart">
            <div className="checkout__title">Your shopping Cart.</div>
            <div className="itemCart__container">
              <div className="cart__items">
                {storedNames.map((d, i) => (
                  <CheckoutProduct
                    id={i}
                    title={d.title}
                    image={d.image}
                    price={d.price}
                    rating={d.rating}
                  />
                ))}
              </div>
              <div className="calc__items">{dat > 0 && <Subtotal />}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
