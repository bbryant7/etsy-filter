import update from "immutability-helper";
import { FILTER_PRODUCTS } from "../actionTypes/actions";
import products from "../data/products";

// Define initial state object
const initialState = {
  products: products,
  filter: "all"
};

const reducer = function(state = initialState, action) {
  if (action.type === FILTER_PRODUCTS) {
    return update(state, { filter: { $set: action.payload } });
  } else {
    return state;
  }
};

export default reducer;
