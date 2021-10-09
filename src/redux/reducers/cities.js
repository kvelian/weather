// export function city(state = {name:"New City", temp:"15"}, action) {
//     switch(action.type) {
//         case "MAKE_CITY": return [state, ...{ name: action.name, temp: action.temp}];
//         default: return state;
//     }
// }
import {CITY_ACTIONS} from "../constants"

export function citiesReducer(state = [], action) {
    switch (action.type){
        case CITY_ACTIONS.ADD: return [...state, { id: action.id, name: action.name, temp: action.temp}];
        case CITY_ACTIONS.UPDATE: return action.array;
        case CITY_ACTIONS.CLEAR: return [];
        default: return state;
    }
}