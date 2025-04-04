import { AxiosResponse } from "axios";

export const API_URL = "https://ecommerce-api-live.vercel.app";

export const handleRequest = async<T>(request: Promise<AxiosResponse<T>>): Promise<T> => {
    try{
        const response = await request;
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}