import axios from "axios";
import { ISearchItem } from "../types/ISearch";
import { API_URL, handleRequest } from "./baseService";

export const searchService = async (searchInput: string): Promise<ISearchItem[]> => {
    return await handleRequest(
        axios.get(`${API_URL}/search`, {
            params: { s: searchInput },
        })
    )
}