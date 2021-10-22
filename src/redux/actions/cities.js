import {CITIES_ACTIONS} from "../constants"

export function addCity(cityUrl) {
    return {
        type: CITIES_ACTIONS.ADD,
        cityUrl
    };
}

export function updateCity(cityUrl, cityObject) {
    return {
        type: CITIES_ACTIONS.UPDATE,
        cityUrl,
        cityObject
    }
}

export function deleteCity(cityUrl) {
    return {
        type: CITIES_ACTIONS.DELETE,
        cityUrl
    };
}

export function clearCities() {
    return {
        type: CITIES_ACTIONS.CLEARALL,
    };
}