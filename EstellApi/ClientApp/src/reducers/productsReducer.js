import { RECEIVE_PRODUCTS, RECEIVE_PRODUCTS_BY_CATEGORY_ID, ADD_PRODUCT, REMOVE_PRODUCT, REPLACE_PRODUCT} from '../actions';

const initialState = { products: [] }
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
            case RECEIVE_PRODUCTS_BY_CATEGORY_ID:
            return action.products;
        case ADD_PRODUCT:
            return [action.payload, ...state];
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id);
        case REPLACE_PRODUCT:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        name: action.payload.name,
                        description: action.payload.description,
                        imgPath: action.payload.imgPath,
                        price: action.payload.price, 
                        age: action.payload.age, 
                        vendorCode: action.payload.vendorCode
                    }
                } else return product;
            })
        default:
            return state;
    }
}