import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import products from './productsReducer';
import product from './productReducer';
import categories from './categoriesReducer';
import spinner from './spinnerReducer';
import alert from './alertReducer';

export default combineReducers({
  loadingBar: loadingBarReducer,
  products: products,
  product: product,
  categories: categories,
  spinner: spinner,
  alert: alert
});