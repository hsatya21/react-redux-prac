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

  // const product = {
  //   name: "Nokia 6600 5G",
  //   type: "Mobile",
  //   price: 20000,
  //   color: "blue",
  // };

  const handleAdd = (item) => {
    dispatch(addTocart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleEmpty = () => {
    dispatch(emptyCart());
  };

  // const handleProductList = () => {
  //   dispatch(productList());
  // };

  const renderProductItems = data.map((item) => {
    return (
      <div className="product-item" key={item.id}>
        <p>
          <img src={item.photo} alt={item.name} height="60px" width="60px" />
        </p>
        <div>Name : {item.name}</div>
        <div>Color : {item.color}</div>
        <div>Brand : {item.brand}</div>
        <div>Price : {item.price}</div>
        <div>Type : {item.type}</div>
        <div>
          <button onClick={() => handleAdd(item)}>Add to Cart</button>
          <button onClick={() => handleRemove(item)}>Remove from Cart</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button onClick={handleEmpty}>Empty cart</button>
      <div className="product-container">{renderProductItems}</div>
    </div>
  );
}

export default Main;
