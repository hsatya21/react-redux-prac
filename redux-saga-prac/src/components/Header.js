import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { cartData } from "../redux/reducer";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("Redux data in header:", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm-Store</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144484.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
