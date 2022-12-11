import axios from 'axios';

export const axiosInstanceNormal = axios.create({
    baseURL: "http://localhost:8080/",
});

export const axiosInstanceAuth = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});