import {API} from "./index"


export const getCities = async (value) => {
    const { data } = await API.get("/search.json", {
        params: {
            q: value || "London"
        }
    });
    return data;
};