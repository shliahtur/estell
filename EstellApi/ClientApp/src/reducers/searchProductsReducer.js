import { GET_SEARCH_PRODUCTS} from '../actions';

const initialState = { products: [] }
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SEARCH_PRODUCTS:
            return action.searchProducts;
        default:
            return state;
    }
}