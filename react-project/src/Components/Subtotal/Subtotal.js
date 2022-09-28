import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import Payment from "../Payment";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [reminder, setreminder] = useState(false);

  const navigate = useNavigate();

  const giftHandler = (e) => {
    setreminder(e.currentTarget.checked);
  };
  const getBasketTotalPrice = (basket) => {
    let total = basket?.reduce((amount, item) => amount + item.price, 0);
    if (reminder) {
      total = total - total * 0.1;
    }
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" onChange={giftHandler} />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="../Payment">
        <button>Proceed to Checkout</button>{" "}
      </Link>
    </div>
  );
}

export default Subtotal;
