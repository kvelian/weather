import {API} from "./instance"

export const getCityShort = async (value) => {
    const {data} = await API.get("/forecast.json", {
        params: {
            q: value,
            days: 1,
            aqi: "no",
            alerts: "no"
        }
    });
    return data;
};

export const getCityFull = async (value) => {
    const {data} = await API.get("/forecast.json", {
        params: {
            q: value,
            days: 10,
            aqi: "no",
            alerts: "yes"
        }
    });
    return data;
};
