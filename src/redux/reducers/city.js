import {CITY_DETAILS_ACTIONS} from "../constants"

export function cityDetailsReducer(state = [], action) {
    switch (action.type) {
        case CITY_DETAILS_ACTIONS.ADD: {
            console.log(state[action.url], action.url)
            return !state[action.url] ? [...state, {[action.url]: action.item}] : state;
        }
        case CITY_DETAILS_ACTIONS.UPDATE:
            return state[action.url] = action.item;
        case CITY_DETAILS_ACTIONS.DELETE:
            return [];
        default:
            return state;
    }
}