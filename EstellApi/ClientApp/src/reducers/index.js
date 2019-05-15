import { combineReducers } from 'redux';
import products from './productsReducer';
import product from './productReducer';

export default combineReducers({
  products: products,
  product: product,
});