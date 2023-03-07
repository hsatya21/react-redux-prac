import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  console.log("Data in main component from saga:", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const product = {
    name: "Nokia 6600 5G",
    type: "Mobile",
    price: 20000,
    color: "blue",
  };

  const handleAdd = () => {
    dispatch(addTocart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.name));
  };

  const handleEmpty = () => {
    dispatch(emptyCart());
  };

  const handleProductList = () => {
    dispatch(productList());
  };

  return (
    <div>
      <button onClick={handleAdd}>Add to Cart</button>
      <button onClick={handleRemove}>Remove from cart</button>
      <button onClick={handleEmpty}>Empty cart</button>
      <div>
        <button onClick={handleProductList}>Get Product List</button>
      </div>
    </div>
  );
}

export default Main;
