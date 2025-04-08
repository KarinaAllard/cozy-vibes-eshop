import { Link } from "react-router";


export const Searchbar = () => {

	return (
		
        <div className="flex relative items-center">
            <input 
                type="text"
                placeholder="Search"
                className="border border-[var(--warm-light-gray)] bg-[var(--product-card-bg)] px-2 py-0.5 rounded-sm focus:outline-0"
            />
            <div className="absolute top-full left-0 w-full bg-[var(--soft-ivory)] border border-[var(--warm-light-gray)]">
                <div className="flex flex-col">
                <img src="/images/logo.png" alt="placeholder" className="p-6" />
                <Link to={"#"} className="underline text-[var(--muted-gold)] hover:text-[var(--muted-gold-hv)]"><p className="text-[var(--muted-gold)] hover:text-[var(--muted-gold-hv)]">Text results here</p></Link>
                </div>
            </div>
        </div>

	);
};

