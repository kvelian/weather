import {CITY_ACTIONS} from "../constants"

export function citiesReducer(state = [], action) {
    switch (action.type){
        case CITY_ACTIONS.ADD: return !state.includes(action.item) ? [...state, action.item] : state ;
        case CITY_ACTIONS.UPDATE: return action.array;
        case CITY_ACTIONS.CLEAR: return [];
        default: return state;
    }
}