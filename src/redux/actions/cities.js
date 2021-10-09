import {CITY_ACTIONS} from "../constants"

export function addCity({id, name, temp}) {
    return {
        type: CITY_ACTIONS.ADD,
        id,
        name,
        temp
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