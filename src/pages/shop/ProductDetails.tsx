import { Button } from "../../components/Button";
import { useProducts } from "../../hooks/useProducts";
// import "../../styles/shop.css";
import { useParams } from "react-router";
import { Link } from "react-router";
import { MdChevronLeft } from "../../icons";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { CartActionType } from "../../reducers/CartReducer";

export const ProductDetails = () => {
	const { id } = useParams();
	const { cart, dispatch } = useContext(CartContext);
	const { products, isLoading, error } = useProducts();
	const [cartBanner, setCartBanner] = useState(false);

	const product = products.find((p) => p.id === Number(id));

	const inStock = (product?.stock ?? 0) > 0;

	const handleAddToCart = () => {
		if (product) {
			const cartItem = cart.find((item) => item.product.id === product.id);
			const currentQuantity = cartItem ? cartItem.quantity : 0;

			if (currentQuantity + 1 > product.stock) {
				alert("Oops, the item is out of stock!");
				return;
			}

			dispatch({
				type: CartActionType.ADD_ITEM,
				payload: {
					product,
					quantity: 1,
				},
			});
			setCartBanner(true);
			setTimeout(() => setCartBanner(false), 5000);
		}
	};

	return (
		<div className="flex flex-col">
			{isLoading && <p>Loading products</p>}
			{error && <p>Error: {error}</p>}
			{cartBanner && (
				<div className="bg-[var(--muted-gold)] text-[var(--soft-ivory)]">
					<h4>Item added to cart!</h4>
				</div>
			)}
			<div className="flex justify-center items-center flex-col gap-2">
				<div className="flex max-w-7xl w-full p-10 pb-0 justify-end">
					<Link to={"/products"} className="flex flex-row">
						<MdChevronLeft className="text-2xl" />
						Back
					</Link>
				</div>
				<div className="flex flex-col max-w-7xl p-4 mb-10 md:flex-row justify-center w-full px-10 md:gap-12">
					<div className="md:w-1/2">
						<img className="border border-[var(--warm-light-gray)]" src={product?.image} alt={product?.name} />
					</div>
					<div className="md:w-1/2 lg:pt-20 md:pt-4">
						<div className="product-text">
							<h2 className="border-b-1 m-2 border-[var(--dusty-rose)]">
								{product?.name}
							</h2>
							{!inStock && <h4>Out of Stock</h4>}
							<h3 className="text-right">{product?.price} kr</h3>
						</div>

						<div className="button-div">
							<Button variant="primary"
								onClick={handleAddToCart}
								className="cart-btn"
								disabled={!inStock}
							>
								{inStock ? "Add to Cart" : "Out of Stock"}
							</Button>
						</div>
						<div className="mt-10">
							<h4>Product Description:</h4>
							<p>{product?.description}</p>
							<p>Category: {product?.category}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
