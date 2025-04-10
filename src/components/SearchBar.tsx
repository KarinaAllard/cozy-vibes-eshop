import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSearch } from "../hooks/useSearch";
import { Button } from "./Button";
import { FaTimes } from "../icons";


export const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>("");
    const { searchResults, error, isLoading } = useSearch(searchText);

    const truncateTitle = (title: string, length: number) => {
        return title.length > length ? title.substring(0, length) + '...' : title;
    }

    const SRC_BASE_URL = 'https://www.lagerhaus.com/home-decoration/';
    const BASE_URL = 'https://cozy-vibes-eshop.vercel.app/';

    const productLinks = [
        { srcLink: `${SRC_BASE_URL}candles-candleholders/scented-candles/doftljus-citronella`, myLink: `${BASE_URL}product/2` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/scented-candles/doftljus-pineapple-1`, myLink: `${BASE_URL}product/3` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/scented-candles/doftljus-strawberries-1`, myLink: `${BASE_URL}product/4` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-rosa`, myLink: `${BASE_URL}product/5` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-matcha`, myLink: `${BASE_URL}product/6` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-kram`, myLink: `${BASE_URL}product/7` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-paron`, myLink: `${BASE_URL}product/8` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-bla`, myLink: `${BASE_URL}product/9` },
        { srcLink: `${SRC_BASE_URL}candles-candleholders/tealightholders-lanterns/ljuslykta-rada-corall`, myLink: `${BASE_URL}product/10` },
    ];

    const clearSearch = () => {
        setSearchText("");
    }

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
            {searchText && (
                <Button variant="transparent" onClick={clearSearch} className="absolute -right-2 top-1/2 -translate-y-1/2"><FaTimes className="text-2xl"/></Button>
            )}
            {searchText.length >= 3 && (
                <div className="absolute max-h-[500px] overflow-y-scroll md:max-h-[650px] top-full left-0 w-full bg-[var(--soft-ivory)] border border-[var(--warm-light-gray)]">
                {error ? (
                    <p className="p-2 text-[var(--burnt-red)]">Error fetching search results.</p>
                ) : (
                    <div className="flex flex-col">
                        <Link to={"/search"} className="bg-[var(--dusty-rose)]"><p className="text-2xl text-[var(--soft-ivory)] hover:text-[var(--product-card-bg)]">View all</p></Link>
                        
                        {isLoading ? (
                            <p className="p-2 text-[var(--muted-gold)]">Searching...</p>
                        ) : searchResults.length > 0 ? (
                            searchResults.slice(0, 10).map((item) => {
                                const matchedProduct = productLinks.find((p) => p.srcLink === item.link);
                                const internalLink = matchedProduct?.myLink || item.link;
                                const isInternal = Boolean(matchedProduct);

                            return (
                            <div 
                                key={item.link} 
                                className={`p-2 border-b border-[var(--warm-light-gray)] ${
                                    !isInternal ? "opacity-20 pointer-events-none cursor-not-allowed" : ""
                                }`}
                            >
                                <Link 
                                    to={isInternal ? internalLink : "#"} 
                                    target={isInternal ? "_self" : "_blank"} 
                                    rel={isInternal ? undefined : "noopener noreferrer"} 
                                    className={`underline ${
                                        isInternal ? "text-[var(--muted-gold)] hover:text-[var(--muted-gold-hv)]"
                                         : "text-[var(--soft-charcoal)]"
                                         }`}
                                >
                                {item.pagemap.cse_thumbnail && (
                                    <img 
                                        src= {item.pagemap.cse_thumbnail[0].src} 
                                        alt={item.title}
                                        className="w-[200px]" 
                                    />
                                )}
                                    <p className={`underline ${
                                        isInternal ? "text-[var(--muted-gold)] hover:text-[var(--muted-gold-hv)]"
                                         : "text-[var(--soft-charcoal)]"
                                         }`}
                                    >
                                        {truncateTitle(item.title, 35)}
                                    </p>
                                </Link>
                            </div>
                            )})
                        ) : (
                            <p className="p-2 text-[var(--warm-light-gray)]">No results found</p>
                         )}
                        
                    </div>
                )}
            </div>
            )}
        </div>

	);
};

