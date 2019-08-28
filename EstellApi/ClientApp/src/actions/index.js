import axios from 'axios';
import history from '../history';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import FormData from 'form-data'
export const RECEIVE_PRODUCTS = 'GET_PRODUCTS';
export const RECEIVE_PRODUCTS_BY_CATEGORY = 'RECEIVE_PRODUCTS_BY_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REPLACE_PRODUCT = 'REPLACE_PRODUCT';
export const SHOW_ALERT = 'SHOW_ALERT';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS';


const apiUrl = 'http://localhost:49969/api/products';

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

export const getCategories = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/GetCategories`)
      .then(response => {
        dispatch({ type: RECEIVE_CATEGORIES, categories: response.data })
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


export const addProduct = (props) => {
 
  let formData = new FormData();
  
  props.Images.map(el =>
    formData.append("images", el)
  )
  Object.keys(props.Product)
  .forEach(key => formData
    .append(key, props.Product[key]));

  return (dispatch) => {
    dispatch(showSpinner(true))

    axios.post(`${apiUrl}/AddNewProduct`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      })
      .then(({ data }) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: data
        });

      })
      .then(response => {
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/GetProductById/${id}`)
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
    return axios.delete(`${apiUrl}/DeleteProduct/${id}`)
      .then(response => {
        dispatch({ type: REMOVE_PRODUCT, payload: { id } })
      })
     
      .catch(error => {
        throw (error);
      });
  };
};

export const updateProduct = (props) => {
  let formData = new FormData();
  
  props.Images.map(el =>
    formData.append("images", el)
  )
  Object.keys(props.Product)
  .forEach(key => formData
    .append(key, props.Product[key]));

  return (dispatch) => {
    dispatch(showSpinner(true))

    axios.post(`${apiUrl}/EditProduct`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      })
      .then(response => {
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})
export const showSpinner = (isShow) => ({
  type: SHOW_SPINNER,
  payload: isShow
})

export const getSearchProducts = (searchText) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/GetSearchProducts/${searchText}`)
      .then(response => {
        dispatch({ type: GET_SEARCH_PRODUCTS, searchProducts: response.data })
      })
      .catch(error => { throw (error); });
  };
};
