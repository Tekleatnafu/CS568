import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="🍳"
        />
        <h3>Hello</h3>
        <h2 className="checkout_title">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}

export default Checkout;
