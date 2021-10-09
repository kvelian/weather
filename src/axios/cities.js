import {API} from "./index"


export const getCities = async (value) => {
    if (value.length > 2) {
        const {data} = await API.get("/search.json", {
            params: {
                q: value
            }
        });
        return data;
    }
};