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

        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <header className=" bg-[var(--warm-beige)]">{isAdmin ? <AdminNavbar /> : <Navbar />}</header>
        <main className=" bg-[var(--soft-ivory)]"><Outlet/></main>
        <footer><Footer/></footer>
        </div>
    )
}