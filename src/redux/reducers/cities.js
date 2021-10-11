import {CITIES_ACTIONS} from "../constants"

export function citiesReducer(state = [], action) {
    switch (action.type){
        case CITIES_ACTIONS.ADD: return !state.includes(action.itemUrl) ? [...state, action.itemUrl] : state ;
        case CITIES_ACTIONS.UPDATE: return action.array;
        case CITIES_ACTIONS.CLEAR: return [];
        default: return state;
    }
}