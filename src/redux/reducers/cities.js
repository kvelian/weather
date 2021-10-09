// export function city(state = {name:"New City", temp:"15"}, action) {
//     switch(action.type) {
//         case "MAKE_CITY": return [state, ...{ name: action.name, temp: action.temp}];
//         default: return state;
//     }
// }

export function citiesReducer(state = [], action) {
    switch (action.type){
        case "ADD_CITY": return [...state, { id: action.id, name: action.name, temp: action.temp}];
        default: return state;
    }
}