// import "../styles/home.css"

import { Link } from "react-router";
import { Button } from "../components/Button";

export const Home = () => {
	return (
		<div className="flex flex-col items-center mb-20">
			<h1 className="bg-[var(--dusty-rose)] text-[var(--soft-ivory)] w-full mb-10 ">
				Cozy, Calming Decor
			</h1>

			<div className="flex flex-col items-center">
				<h2 className="text-[var(--moss-green)]">Welcome to </h2>
				<img src="/images/logo.png" alt="Cozy Vibes" className="w-28" />
				<div className="w-full max-w-7xl px-4">
					<div className="p-8">
						<p className="text-[var(--soft-charcoal)]">
							Discover our selection of cozy home decor items.
						</p>
						<Button variant="primary" className="mt-4"><Link to={"/products"}>Shop Now</Link></Button>
					</div>
					<section className="p-8">
						<h3>Our Purpose</h3>
						<p className="mt-2">
							The purpose of this little eshop is not to sell anything. The
							products displayed on this website are purely for educational
							purposes, as this is a school project that I'm making for my class
							at Medieinstitutet. I'm learning how to build full e-commerce
							functionality using modern web technologies, and this project is a
							way for me to put all that into practice. So while you can browse,
							search, and even add things to your cart, none of it is actually
							for sale - just part of the learning process!
						</p>
						<br />
						<p>
							All product images and styles are borrowed from Lagerhaus and are
							used here solely for educational purposes. This site is not
							affiliated with or endorsed by Lagerhaus in any way.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};
