// import "../styles/home.css"
import logo from "../../public/images/logo.png"

export const Home = () => {
	return (
		<div className="home-wrapper flex items-center flex-col">
			<div className="p-8 flex items-center gap-3">
  				<h1 className="text-[var(--moss-green)]">Welcome to </h1><img src={logo} alt="Cozy Vibes" className=" w-24 " />
			</div>

			<h2 className="text-[var(--dusty-rose)]">Cozy, Calming Decor</h2>
			<p className="text-[var(--soft-charcoal)]">Discover our selection of cozy home decor items.</p>

			<button className="bg-[var(--muted-gold)] text-white hover:bg-[var(--sage-green)] p-2 rounded-md">
  				Shop Now
			</button>
		</div>
	);
};
