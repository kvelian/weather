import {combineReducers} from "redux";

import {citiesReducer} from "./cities"

export const reducers = combineReducers({
    cities: citiesReducer
})