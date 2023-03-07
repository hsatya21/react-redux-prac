import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.log("Product List ", action);
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.log("Set Product List", action);
      return [...action.data];
    default:
      return data;
  }
};
