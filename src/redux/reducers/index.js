import {combineReducers} from "redux";

import {citiesReducer} from "./cities"
import {cityDetailsReducer} from "./city";

export const reducers = combineReducers({
    cities: citiesReducer,
    cityDetails: cityDetailsReducer
})