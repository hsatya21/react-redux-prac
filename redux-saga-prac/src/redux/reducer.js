import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer called", action);
      return action.data;
    case REMOVE_FROM_CART:
      console.log("reducer called", action);
      return action.data;
    default:
      return "abc";
  }
};
