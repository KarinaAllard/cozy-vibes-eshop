import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSearch } from "../hooks/useSearch";


export const Searchbar = () => {
    const [searchText, setSearchText] = useState<string>("");
    const { searchResults, error, isLoading } = useSearch(searchText);

    useEffect(() => {
        if (searchText.length < 3) {
            return;
        }
    }, [searchText]);

	return (
		
        <div className="flex relative items-center">
            <input 
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border border-[var(--warm-light-gray)] bg-[var(--product-card-bg)] px-2 py-0.5 rounded-sm focus:outline-0"
            />
            {searchText.length >= 3 && (
                <div className="absolute top-full left-0 w-full bg-[var(--soft-ivory)] border border-[var(--warm-light-gray)]">
                {error ? (
                    <p className="p-2 text-[var(--burnt-red)]">Error fetching search results.</p>
                ) : (
                    <div className="flex flex-col">
                        {searchResults.length > 0 ? (
                            searchResults.slice(0, 5).map((item) => (
                            <div key={item.link} className="p-2 border-b border-[var(--warm-light-gray)]">
                                <Link to={item.link} target="_blank" rel="noopener noreferrer" className="underline text-[var(--muted-gold)] hover:text-[var(--muted-gold-hv)]"><p>{item.title}</p></Link>
                            </div>
                            ))
                        ) : (
                            <p>No results found</p>
                         )}
                    </div>
                )}
            </div>
            )}
        </div>

	);
};

