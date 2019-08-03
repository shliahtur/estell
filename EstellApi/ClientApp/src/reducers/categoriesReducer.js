import { RECEIVE_CATEGORIES} from '../actions';

const initialState = { categories: [] }
export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
          
        default:
            return state;
    }
}