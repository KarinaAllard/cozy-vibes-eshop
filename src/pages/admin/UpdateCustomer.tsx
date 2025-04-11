import { Link, useNavigate, useParams } from "react-router";
import { useCustomers } from "../../hooks/useCustomers";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ICustomer } from "../../types/ICustomer";

export const UpdateCustomer = () => {
	const { customers, updateCustomerHandler } = useCustomers();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const customer = customers.find((c) => c.id === Number(id));

	const [formData, setFormData] = useState<ICustomer>({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		phone: "",
		street_address: "",
		postal_code: "",
		city: "",
		country: "",
	});

	useEffect(() => {
		if (customer) {
			setFormData({
				firstname: customer.firstname,
				lastname: customer.lastname,
				email: customer.email,
				password: customer.password,
				phone: customer.phone,
				street_address: customer.street_address,
				postal_code: customer.postal_code,
				city: customer.city,
				country: customer.country,
			});
		}
	}, [customer]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!customer) return;

		await updateCustomerHandler(customer.id as number, formData);
		navigate("/admin/manage-customers");
	};

	if (!customer) {
		return <p>Customer not found.</p>;
	}

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<h2>Update Customer</h2>
				<div className="form-div flex flex-col items-center gap-1 mb-5">
					<input
						type="text"
						name="firstname"
						value={formData.firstname}
						onChange={handleChange}
						placeholder="First Name"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="lastname"
						value={formData.lastname}
						onChange={handleChange}
						placeholder="Last Name"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Password"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Phone Number"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="street_address"
						value={formData.street_address}
						onChange={handleChange}
						placeholder="Street Address"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="postal_code"
						value={formData.postal_code}
						onChange={handleChange}
						placeholder="Postal Code"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="city"
						value={formData.city}
						onChange={handleChange}
						placeholder="City"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
					<input
						type="text"
						name="country"
						value={formData.country}
						onChange={handleChange}
						placeholder="Country"
						required
						className="border border-[var(--warm-light-gray)] rounded px-3 text-xl text-[var(--soft-charcoal)] focus:outline-0"
					/>
				</div>

				<div className="button-div flex flex-col items-center gap-2">
					<Button variant="submit" type="submit" className="submit-btn">
						Update Customer
					</Button>
					<Link to={"/admin/manage-customers"}>Back</Link>
				</div>
			</form>
		</div>
	);
};
