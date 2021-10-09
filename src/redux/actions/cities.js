const ADD_CITY = "ADD_CITY"

let id = 0;

export function addCity({name, temp}) {
    return {
        type: ADD_CITY,
        id: ++id,
        name,
        temp
    };
}