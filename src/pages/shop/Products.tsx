import { Button } from "../../components/Button";
import { useProducts } from "../../hooks/useProducts";
// import "../../styles/shop.css";
import { Link } from "react-router";
// import { FaShoppingBag } from "../../icons";

export const Products = () => {
	const { products, isLoading, error } = useProducts();

	return (
		<div className="flex flex-col items-center mb-20">
			<h1 className="bg-[var(--dusty-rose)] text-[var(--soft-ivory)] w-full mb-10 ">Our Products</h1>
			{isLoading && <p>Loading products</p>}
			{error && <p>Error: {error}</p>}
			<div className="w-full max-w-7xl px-4">


			<div className="flex flex-wrap gap-1 items-start justify-center">
				{products.length === 0 && !isLoading && <p>No products found.</p>}
				{products.map((product) => (
					<Link
						to={`/product/${product.id}`}
						key={product.id}
						className=" w-sm product-link"
					>
						<div className="p-8 text-left hover:scale-102 text-[var(--moss-green)]" key={product.id}>
							<div className="">
								<img  src={product.image} alt={product.name} className="mb-2 border border-[var(--warm-light-gray)]" />
							</div>
							<div>
								<h4 className="h-16">{product.name}</h4>
							</div>
							<div className="flex justify-end w-full items-center">
								<p className="text-[var(--moss-green)] font-black flex-grow">{product.price} kr</p>
								<Button variant="secondary" className="">See More</Button>
								{/* <Button className="w-50 flex justify-end"><FaShoppingBag className="text-5xl hover:text-[var(--soft-ivory)] hover:bg-[var(--sage-green)] p-2 rounded-full" /></Button> */}
							</div>
						</div>
					</Link>
				))}
			</div>			
			</div>
		</div>
	);
};
