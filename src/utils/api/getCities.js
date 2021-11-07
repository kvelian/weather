import {API} from "./instance"

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