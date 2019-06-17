import axios from 'axios';
import history from '../history';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_PRODUCTS = 'GET_PRODUCTS';
export const RECEIVE_PRODUCTS_BY_CATEGORY = 'RECEIVE_PRODUCTS_BY_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REPLACE_PRODUCT = 'REPLACE_PRODUCT';


const apiUrl = 'http://localhost:5001/api/products';

export const getProducts = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/GetProducts`)
      .then(response => {
        dispatch({ type: RECEIVE_PRODUCTS, products: response.data })
        dispatch(hideLoading())
      })
      .catch(error => { throw (error); });
  };
};

export const getProductsByCategory = (category) => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/GetProductsByCategory/${category}`)
      .then(response => {
        dispatch({ type: RECEIVE_PRODUCTS_BY_CATEGORY, products: response.data })
        dispatch(hideLoading())
      })
      .catch(error => { throw (error); });
  };
};


export const addProduct = ({ name, description, imgPath, price, age, vendorCode }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/RegRequestCreate`, {
        name, description, imgPath, price, age, vendorCode
      })
      .then(response => {
        let data = response.data;

        dispatch({
          type: ADD_PRODUCT, payload: {
             name: data.name, description: data.description, imgPath: data.imgPathm,
             price: data.price, age: data.age, vendorCode: data.vendorCode
          }
        })
      })
      .then(() => {
        history.push("/products")
      })
      .catch(error => { throw (error) });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/RegRequestsSelectById/${id}`)
      .then(response => {
        dispatch({ type: RECEIVE_PRODUCT, product: response.data });
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({ type: REMOVE_PRODUCT, payload: { id } })
      })
      .then(() => {
        history.push("/products")
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const updateProduct = (product) => {
  const productId = product.id;
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${product.id}.json`, {  name: product.name, description: product.description, imgPath: product.imgPathm,
        price: product.price, age: product.age, vendorCode: product.vendorCode })
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_PRODUCT, payload: { id: data.id,  name: data.name, description: data.description, imgPath: data.imgPathm,
            price: data.price, age: data.age, vendorCode: data.vendorCode } })
        dispatch({ type: REPLACE_PRODUCT, payload: { id: data.id,  name: data.name, description: data.description, imgPath: data.imgPathm,
            price: data.price, age: data.age, vendorCode: data.vendorCode } })
      })
      .then(() => {
        history.push(`/products/${productId}`)
      })
      .catch(error => { throw (error) });
  };
};

