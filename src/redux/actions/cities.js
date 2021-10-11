import {CITIES_ACTIONS} from "../constants"

export function addCity(itemUrl) {
    return {
        type: CITIES_ACTIONS.ADD,
        itemUrl
    };
}

export function updateCity(array) {
    return {
        type: CITIES_ACTIONS.UPDATE,
        array
    }
}

export function clearCity() {
    return {
        type: CITIES_ACTIONS.CLEAR,
    };
}