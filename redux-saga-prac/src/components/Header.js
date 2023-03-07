import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { cartData } from "../redux/reducer";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("Redux data in header:", result);
  const hello =
    "## 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 ##";
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
