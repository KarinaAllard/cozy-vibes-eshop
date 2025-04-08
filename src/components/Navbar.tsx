import { useState } from "react"
import { FaShoppingCart, FaTimes, FaBars, FaSearch } from "../icons"
import { Link, NavLink } from "react-router"
import { Button } from "./Button";
import { Searchbar } from "./SearchBar";
// import { Sidebar } from "./Sidebar";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [sidebarContent, setSidebarContent] = useState<"search" | null>(null);

    const toggleMenu = () => {
        setMenuOpen((isOpen) => !isOpen);
    };

    // const openSidebar = (type: "search" ) => {
    //     setSidebarContent(type);
    //     setSidebarOpen(true);
    // }

    return (

        <div className="flex items-center justify-between h-full px-8 relative w-full">
            <div className="w-16 hidden md:block">
                <Link to={"/"}><img src="/images/logo.png" alt="Cozy Vibes" className="w-full h-auto"/></Link>
            </div>

            <div className="block text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
                {menuOpen ? (
                    <FaTimes className="text-[var(--moss-green)] hover:text-[var(--muted-gold)]" />
                ) : (
                    <FaBars className="text-[var(--moss-green)] hover:text-[var(--muted-gold)]" />
                )}
            </div>
            <ul className={`absolute top-20 left-0 w-full md:ml-6 md:w-auto bg-[var(--soft-ivory)] flex flex-col gap-2 p-0 m-0 list-none md:mr-auto
                ${menuOpen ? "flex" : "hidden"} md:flex md:flex-row md:gap-4 md:auto md:static md:bg-transparent`}
            >
                <li className="text-center py-4 px-8 bg-transparent hover:bg-[var(--warm-beige)] transition-all duration-300 ease-in-out">
                    <NavLink to={"/"}  className={({ isActive }) => isActive ? "underline font-bold" : "" } onClick={() => setMenuOpen(false)}>Home</NavLink>
                </li>
                <li className="text-center py-4 px-8 bg-transparent hover:bg-[var(--warm-beige)] transition-all duration-300 ease-in-out">
                    <NavLink to={"/products"}  className={({ isActive }) => isActive ? "underline font-bold" : "" } onClick={() => setMenuOpen(false)}>Shop</NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-3 ml-auto">
                <Searchbar />
                <Link to={"/search"}>
                <FaSearch className="text-[var(--moss-green)] hover:text-[var(--muted-gold)] text-2xl" />
                </Link>
            </div>
            <div className="text-2xl flex gap-4 items-center">
                {/* <Button variant="transparent" onClick={() => openSidebar("search")}>
                    <FaSearch className="text-[var(--moss-green)] hover:text-[var(--muted-gold)] " />
                </Button> */}
                <NavLink to={"/cart"}>
                    <Button variant="transparent">
                        <FaShoppingCart className="text-[var(--moss-green)] hover:text-[var(--muted-gold)] " />
                    </Button>
                </NavLink>
            </div>
            {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                {sidebarContent === "search" && <Searchbar></Searchbar>}
            </Sidebar> */}
        </div>
    )
}