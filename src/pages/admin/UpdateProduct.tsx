import { useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";
import { useProducts } from "../../hooks/useProducts";
import { Link, useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button";

enum ProductCategory {
	Candle = "Candle",
	Vase = "Vase",
	Pot = "Pot",
	HomeTextile = "Home Textile",
	CandleHolder = "Candle Holder",
	Decoration = "Decoration",
}

export const UpdateProduct = () => {
	const { products, updateProductHandler } = useProducts();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const product = products.find((p) => p.id === Number(id));

	const [formData, setFormData] = useState<IProduct>({
		name: "",
		description: "",
		price: 0,
		stock: 0,
		category: "",
		image: "",
	});

	useEffect(() => {
		if (product) {
			setFormData({
				name: product.name,
				description: product.description,
				price: product.price,
				stock: product.stock,
				category: product.category,
				image: product.image,
			});
		}
	}, [product]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!product) return;

		await updateProductHandler(product.id as number, formData);
		navigate("/admin/manage-products");
	};

	if (!product) {
		return <p>Product not found.</p>;
	}

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<h2>Create New Product</h2>
				<div className="form-div flex flex-col items-center gap-1 mb-5">
				<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Name"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<label htmlFor="description">Description:</label>
					<input
						type="text"
						name="description"
						value={formData.description}
						onChange={handleChange}
						placeholder="Description"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						placeholder="Price"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<label htmlFor="stock">Stock:</label>
					<input
						type="number"
						name="stock"
						value={formData.stock}
						onChange={handleChange}
						placeholder="Stock"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<label htmlFor="category">Category:</label>
					<select
						name="category"
						id="category"
						value={formData.category}
						onChange={handleChange}
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					>
						<option value="" disabled>
							Select a category
						</option>
						{Object.values(ProductCategory).map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
					<label htmlFor="image">Image URL:</label>
					<input
						type="text"
						name="image"
						value={formData.image}
						onChange={handleChange}
						placeholder="Insert Image URL"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>

					<div className="button-div flex flex-col items-center gap-2">
						<Button variant="submit" type="submit" className="submit-btn">
							Update Product
						</Button>
						<Link to={"/admin/manage-products"}>Back</Link>
					</div>
				</div>
			</form>
		</div>
	);
};
