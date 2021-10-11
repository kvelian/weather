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

export const getCity = async (value) => {
        const {data} = await API.get("/forecast.json", {
            params: {
                q: value || "tomsk-tomsk-russia",
                days: 1,
                aqi: "no",
                alerts: "no"
            }
        });
        return data;
};