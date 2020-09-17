import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ image, price, id, title, rating }) {
  const [{ basket , user}, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log(user,'kumar');
    var storedNames = JSON.parse(localStorage.getItem("myData"));
    if (storedNames != null) {
      
      storedNames.push({
        id: id,
        price: price,
        title: title,
        rating: rating,
        image: image,
      });
      localStorage.setItem("myData", JSON.stringify(storedNames));
    } else {
      let cart = [
        { id: id, price: price, title: title, rating: rating, image: image },
      ];
      localStorage.setItem("myData", JSON.stringify(cart));
    }


    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product" key={id} id={id}>
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">${price}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
