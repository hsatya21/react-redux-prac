import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  return {
    type: PRODUCT_SEARCH,
    query,
  };
};

// export const setProductList = (data) => {
//   console.log("DATA in set product:", data);
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };
