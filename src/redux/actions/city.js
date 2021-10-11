import {CITY_DETAILS_ACTIONS} from "../constants"

export function addCityDetails(url, item) {
    return {
        type: CITY_DETAILS_ACTIONS.ADD,
        url,
        item
    };
}

export function updateCityDetails(url, item) {
    return {
        type: CITY_DETAILS_ACTIONS.UPDATE,
        url,
        item
    }
}

export function deleteCityDetails(url) {
    return {
        type: CITY_DETAILS_ACTIONS.DELETE,
        url
    };
}