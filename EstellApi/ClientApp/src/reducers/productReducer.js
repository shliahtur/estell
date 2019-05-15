import { RECEIVE_PRODUCT, UPDATE_PRODUCT} from '../actions';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return {
        id: action.id,
        name: action.payload.name,
        description: action.payload.description,
        imgPath: action.payload.imgPath,
        price: action.payload.price, 
        age: action.payload.age, 
        vendorCode: action.payload.vendorCode
      }  
    default:
      return state;
  }
};