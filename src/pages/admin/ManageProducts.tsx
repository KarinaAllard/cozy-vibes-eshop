import { Link } from "react-router";
import { Button } from "../../components/Button";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "../../icons";

export const ManageProducts = () => {
	const { products, isLoading, error, deleteProductHandler } = useProducts();
	const [showProductByID, setShowProductByID] = useState<number | null>(null);

	const showProductDetails = (productId: number) => {
		setShowProductByID((prevId) => (prevId === productId ? null : productId));
	};

	return (
		<div>
			<h1>Manage Products</h1>
			{isLoading && <p>Loading products...</p>}
			{error && <p>Error: {error}</p>}
			<div className="product-wrapper flex flex-col items-center gap-2 mb-6">
				<div className="button-div m-4">
					<Button variant="submit" type="button" className="edit-btn">
						<Link to={"/admin/create-product"}>Create Product</Link>
					</Button>
				</div>
				{products.length === 0 && !isLoading && <p>No products found.</p>}
				{products.map((product) => (
					<div className="product-div flex flex-col items-center p-4" key={product.id}>
						<h3 onClick={() => showProductDetails(product.id!)} className="flex items-center">
							{product.name}
							{showProductByID === product.id ? (
								<MdExpandLess />
							) : (
								<MdExpandMore />
							)}
						</h3>
						{showProductByID === product.id && (
							<div className="flex flex-col w-sm items-center gap-4">
								<div className="product-image m-4">
									<img src={product.image} alt={product.name}/>
								</div>
								<div className="product-info">
									<h4>Price:</h4>
									<p>€{product.price}</p>
									<h4>Stock:</h4>
									<p>{product.stock}</p>
									<h4>Description:</h4>
									<p>{product.description}</p>
									<h4>Category:</h4>
									<p>{product.category}</p>
								</div>
								<div className="button-div flex gap-3">
									<Button variant="primary" type="button" className="edit-btn">
										<Link to={`/admin/update-product/${product.id}`}>
											Update 
										</Link>
									</Button>
									<Button variant="delete"
										className="delete-btn"
										onClick={() =>
											product.id && deleteProductHandler(product.id)
										}
									>
										Delete
									</Button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
