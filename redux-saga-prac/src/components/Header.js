import "../App.css";
import { useSelector } from "react-redux";
// import { cartData } from "../redux/reducer";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  // console.log("Redux data in header:", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3144/3144484.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
