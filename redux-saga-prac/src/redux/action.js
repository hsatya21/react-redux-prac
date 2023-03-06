import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const addTocart = (data) => {
  console.log("add action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("remove action called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
