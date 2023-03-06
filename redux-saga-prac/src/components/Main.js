import { addTocart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  const product = {
    name: "Nokia 6600 5G",
    type: "Mobile",
    price: 20000,
    color: "blue",
  };

  const handleClick = () => {
    dispatch(addTocart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
      <button onClick={handleRemove}>Remove from cart</button>
    </div>
  );
}

export default Main;
