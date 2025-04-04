import { Button } from "../../components/Button";
import { useProducts } from "../../hooks/useProducts";
// import "../../styles/shop.css";
import { Link } from "react-router";
import { FaShoppingBag } from "../../icons";

export const Products = () => {
	const { products, isLoading, error } = useProducts();

	return (
		<div className="flex flex-col p-16 items-center">
			{isLoading && <p>Loading products</p>}
			{error && <p>Error: {error}</p>}
			<div className="flex flex-wrap gap-6 items-start justify-center">
				{products.length === 0 && !isLoading && <p>No products found.</p>}
				{products.map((product) => (
					<Link
						to={`/product/${product.id}`}
						key={product.id}
						className="product-link"
					>
						<div className="w-68 text-left hover:scale-102 p-2 text-[var(--moss-green)]" key={product.id}>
							<img src={product.image} alt={product.name} className="mb-2" />
							<div>
								<h4 className="h-16">{product.name}</h4>
							</div>
							<div className="flex justify-end w-full">
								<p className="text-[var(--moss-green)] font-black flex-grow">{product.price} kr</p>
								<Button className="max-w-[100px] p-1 px-3 cursor-pointer flex rounded-xl justify-end hover:bg-[var(--warm-beige)] hover:underline">See More</Button>
								{/* <Button className="w-50 flex justify-end"><FaShoppingBag className="text-5xl hover:text-[var(--soft-ivory)] hover:bg-[var(--sage-green)] p-2 rounded-full" /></Button> */}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
