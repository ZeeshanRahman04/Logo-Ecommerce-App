import { PiShoppingCartDuotone } from "react-icons/pi";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="empty__cart">
      <h1>Your Cart is Empty </h1>
      <PiShoppingCartDuotone color="grey" size={80} />
    </div>
  );
}

export default EmptyCart;
