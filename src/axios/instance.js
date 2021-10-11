import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: "7017b7411de445bba9c130745210310"
    }
});