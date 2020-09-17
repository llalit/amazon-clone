import React from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getbasketTotal } from "../reducer/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  var storedNames = JSON.parse(localStorage.getItem("myData"));
  console.log(storedNames);
  var doubleValue = "";
  if (storedNames != null) {
    doubleValue = storedNames.map((value, key) => {
      return <div>{value.price} {key.price} </div>;
    });
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({storedNames.length} items):
               <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(storedNames)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"$"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
