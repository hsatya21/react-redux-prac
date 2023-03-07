import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART called", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART called", action);
      // eslint-disable-next-line no-unused-expressions
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    // data = data.filter((item) => item.name !== action.data);
    // return data;
    case EMPTY_CART:
      console.log("EMPTY_CART called", action);
      data = [];
      return data;
    default:
      return data;
  }
};
