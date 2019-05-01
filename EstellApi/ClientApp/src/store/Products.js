const requestProductsType = 'REQUEST_PRODUCTS';
const receiveProductsType = 'RECEIVE_PRODUCTS';
const initialState = { products: [], isLoading: false };

export const actionCreators = {
  requestProducts: startDateIndex => async (dispatch, getState) => {    
    if (startDateIndex === getState().products.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestProductsType, startDateIndex });

    const url = `http://localhost:55302/api/SampleData/get`;
    const response = await fetch(url);
    const products = await response.json();

    dispatch({ type: receiveProductsType, startDateIndex, products });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestProductsType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

  if (action.type === receiveProductsType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      forecasts: action.products,
      isLoading: false
    };
  }

  return state;
};
