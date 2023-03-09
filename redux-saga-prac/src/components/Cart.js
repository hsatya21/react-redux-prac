import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);

  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.log(amount);

  const renderCartItems = cartData.map((item) => {
    return (
      <tr key={item.id + Math.floor(Math.random() * 100)}>
        <td>{item.name}</td>
        <td>{item.color}</td>
        <td>{item.price}</td>
        <td>{item.brand}</td>
        <td>{item.type}</td>
      </tr>
    );
  });
  return (
    <div>
      <Link to="/">Product List</Link>
      <h2>Cart data</h2>
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>{renderCartItems}</tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
