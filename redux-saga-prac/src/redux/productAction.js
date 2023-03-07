import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

// export const setProductList = (data) => {
//   console.log("DATA in set product:", data);
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };
