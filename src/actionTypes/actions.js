export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';


const makeActionCreator = function (actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    }
  }
}

export const filterProducts = makeActionCreator(FILTER_PRODUCTS);
