import { Outlet, useLocation } from "react-router"
import { Navbar } from "../components/Navbar"
// import "../styles/global.css"
// import "../styles/layout.css"
import { AdminNavbar } from "../components/AdminNavbar"
import { Footer } from "../components/Footer"

export const Layout = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");

    return (

        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] min-w-xs">
        <header className=" bg-[var(--soft-ivory)] w-full h-20 min-w-xs">{isAdmin ? <AdminNavbar /> : <Navbar />}</header>
        <main className=" bg-[var(--soft-ivory)] min-w-xs"><Outlet/></main>
        <footer className=" bg-[var(--sage-green)] min-w-xs"><Footer/></footer>
        </div>
    )
}