import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import products from './productsReducer';
import product from './productReducer';

export default combineReducers({
  loadingBar: loadingBarReducer,
  products: products,
  product: product,
});