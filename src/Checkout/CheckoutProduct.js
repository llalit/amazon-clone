import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
        id: id,
    });
  };
  return (
    <div className="checkoutProduct" key={id} id={id}>
      <img
        src={image}
        alt=""
        key={id}
        id={id}
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove From Basket</button>
      </div>

      
    </div>
  );
}

export default CheckoutProduct;
