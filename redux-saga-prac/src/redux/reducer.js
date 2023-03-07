import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART called", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART called", action);
      data = data.filter((item) => item.id !== action.data);
      return data;
    case EMPTY_CART:
      console.log("EMPTY_CART called", action);
      data = [];
      return data;
    default:
      return data;
  }
};
