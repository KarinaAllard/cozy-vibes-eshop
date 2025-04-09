import { useEffect, useState } from "react"
import { searchService } from "../services/searchService";
import { ISearchItem } from "../types/ISearch"

export const useSearch = (searchInput: string) => {
    const [searchResults, setSearchResults] = useState<ISearchItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (searchInput.length >=3) {
            const timeoutId = setTimeout(() => {
                handleSearch(searchInput);
            }, 1000);

            return () => clearTimeout(timeoutId);
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);

    const handleSearch = async (searchInput: string) => {
        setIsLoading(true);
        setError(null)
        try {
            const results = await searchService(searchInput);
            setSearchResults(results);
        } catch (error) {
            console.error("Search error:", error);
            setError("Failed to fetch search results");
        } finally {
            setIsLoading(false);
        }
    }

    return { searchResults, isLoading, error };
}