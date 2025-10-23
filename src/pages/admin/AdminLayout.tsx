import { useState } from "react";
import { Outlet } from "react-router"
import { Button } from "../../components/Button";
// import "/src/styles/adminlayout.css"

export const AdminLayout = () => {
const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === "demoMode123") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Incorrect password");
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="flex flex-col items-center justify-center">
                <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-6"
                >
                    <h2>Admin Login</h2>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter password"
                        className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button variant="submit" type="submit" className="submit-btn">Log in</Button>
                </form>
            </div>
        )
    }
    return (

        <div>
            <section>
                <Outlet />
            </section>
            
        </div>
    )
}