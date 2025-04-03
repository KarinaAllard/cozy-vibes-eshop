import { Button } from "../../components/Button";
import { useProducts } from "../../hooks/useProducts";
// import "../../styles/shop.css";
import { Link } from "react-router";

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
						<div className="w-68 text-left hover:scale-105 p-2 text-[var(--moss-green)] hover:text-[var(--dusty-rose)]" key={product.id}>
							<img src={product.image} alt={product.name} className="mb-2" />
							<div>
								<h4 className="h-16">{product.name}</h4>
								<p className="text-[var(--moss-green)] font-black">{product.price} kr</p>
							</div>
							<div className="button-div">
								<Button className="cart-btn">View</Button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
