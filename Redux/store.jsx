import { createStore } from "redux";
import { produce } from 'immer';

const initialState = {
    apartments: [],
    cities: [],
    categories: [],
    currentAdvertiser: {},
    currentToken: ""
}

export const Reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_ADVERTISER':
            state.currentAdvertiser = action.payload
            break;
        case 'SET_TOKEN':
            state.currentToken = action.payload
            break;
        case 'SET_APARTMENTS':
            state.apartments = action.payload
            break;
        case 'SET_CITIES':
            state.cities = action.payload
            break;
        case 'SET_CATEGORIES':
            state.categories = action.payload
            break;
        case 'ADD_APARTMENT':
            state.apartments.push(action.payload)
            break;
        default:
            break;
    }
}, initialState)

const theStore = createStore(Reducer)
window.store = theStore
export default theStore;