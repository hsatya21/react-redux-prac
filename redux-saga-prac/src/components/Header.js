import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
// import { cartData } from "../redux/reducer";

const Header = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);

  const handleSearch = (event) => {
    dispatch(productSearch(event.target.value));
  };

  console.log("Redux data in header:", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm-Store</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Product"
        />
      </div>
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
