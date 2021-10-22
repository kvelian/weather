import omit from 'lodash/omit';

import {CITIES_ACTIONS} from "../constants"

export function citiesReducer(state = {}, action) {
    switch (action.type) {
        case CITIES_ACTIONS.ADD:
            return !(action.cityUrl in state) ? {...state, ...{[action.cityUrl]: {}}} : state

        case CITIES_ACTIONS.UPDATE: {
            const cities = state;
            cities[action.cityUrl] = action.cityObject;
            return {...cities};
        }

        case CITIES_ACTIONS.DELETE: {
            const cities = omit(state, [action.cityUrl]);
            return {...cities};
        }

        case CITIES_ACTIONS.CLEARALL:
            return [];

        default:
            return state;
    }
}