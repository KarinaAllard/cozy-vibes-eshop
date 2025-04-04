import { useState } from "react";
import { NavLink } from "react-router"
import { FaBars, FaSignOutAlt, FaTimes } from "../icons";

export const AdminNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setMenuOpen((isOpen) => !isOpen);
        };

    return (

        <div className="flex items-center justify-between h-full px-8 relative">
            <div className="w-16 hidden md:block">
                <img src="/images/logo.png" alt="Cozy Vibes" />
            </div>
            
             <div className="block text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
                            {menuOpen ? <FaTimes className="text-[var(--moss-green)] hover:text-[var(--muted-gold)]" /> : <FaBars className="text-[var(--moss-green)] hover:text-[var(--muted-gold)]"/>}
                        </div>
            <ul className={`absolute top-20 left-0 w-full bg-[var(--soft-ivory)] flex flex-col p-0 m-0 list-none 
                ${menuOpen ? "flex" : "hidden"} md:flex md:flex-row md:static md:w-auto md:bg-transparent`}>

                <li className="text-center py-4 px-8 bg-transparent hover:bg-[var(--warm-beige)] transition-all duration-300 ease-in-out">
                    <NavLink to={"admin/manage-orders"} className={({ isActive }) => isActive ? "underline font-bold" : "" } onClick={() => setMenuOpen(false)}>Orders</NavLink>
                </li>
                <li className="text-center py-4 px-8 bg-transparent hover:bg-[var(--warm-beige)] transition-all duration-300 ease-in-out">
                    <NavLink to={"admin/manage-customers"} className={({ isActive }) => isActive ? "underline font-bold" : "" } onClick={() => setMenuOpen(false)}>Customers</NavLink>
                </li>
                <li className="text-center py-4 px-8 bg-transparent hover:bg-[var(--warm-beige)] transition-all duration-300 ease-in-out">
                    <NavLink to={"admin/manage-products"} className={({ isActive }) => isActive ? "underline font-bold" : "" } onClick={() => setMenuOpen(false)}>Products</NavLink>
                </li>
            </ul>
                <NavLink to={"/products"} onClick={() => setMenuOpen(false)}><FaSignOutAlt className="text-2xl text-[var(--moss-green)] hover:text-[var(--muted-gold)]" /></NavLink>
        </div>
    )
}