import {CITY_ACTIONS} from "../constants"

export function addCity(item) {
    return {
        type: CITY_ACTIONS.ADD,
        item
    };
}

export function updateCity(array) {
    return {
        type: CITY_ACTIONS.UPDATE,
        array
    }
}

export function clearCity() {
    return {
        type: CITY_ACTIONS.CLEAR,
    };
}