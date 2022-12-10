import { axiosInstanceNormal } from "../axios";

export async function login(email, password) {
    try {
        const response = await axiosInstanceNormal.post('/auth/token', {
            email,
            password,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}