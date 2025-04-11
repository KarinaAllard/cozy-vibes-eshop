import { useState } from "react";
import { useCustomers } from "../../hooks/useCustomers";
import { Link } from "react-router";
import { Button } from "../../components/Button";
import { MdExpandLess, MdExpandMore } from "../../icons";

export const ManageCustomers = () => {
	const { customers, isLoading, error, deleteCustomerHandler } = useCustomers();
	const [showCustomerByID, setShowCustomerByID] = useState<number | null>(null);

	const showCustomerDetails = (customerId: number) => {
		setShowCustomerByID((prevId) =>
			prevId === customerId ? null : customerId
		);
	};

	return (
		<div>
			<h1>Manage Customers</h1>
			{isLoading && <p>Loading customers...</p>}
			{error && <p>Error: {error}</p>}

			<div className="customer-wrapper flex flex-col items-center gap-2 mb-6">
				<div className="button-div m-4">
					<Button variant="submit" type="button" className="edit-btn">
						<Link to={"/admin/create-customer"}>Create Customer</Link>
					</Button>
				</div>
				{customers.length === 0 && !isLoading && <p>No customers found.</p>}
				{customers.map((customer) => (
					<div className="customer-div flex flex-col items-center p-4" key={customer.id}>
						<h3 onClick={() => showCustomerDetails(customer.id!)} className="flex items-center">
							{customer.firstname} {customer.lastname}
							{showCustomerByID === customer.id ? (
								<MdExpandLess />
							) : (
								<MdExpandMore />
							)}
						</h3>
						{showCustomerByID === customer.id && (
							<>
								<div className="contact-info">
									<h4>Email: </h4>
									<p>{customer.email}</p>
									<h4>Phone: </h4>
									<p>{customer.phone}</p>
								</div>
								<div className="address-info">
									<h4>Address: </h4>
									<p>
										{customer.street_address}, {customer.postal_code},{" "}
										{customer.city}, {customer.country}
									</p>
								</div>
								<div className="button-div flex gap-3 mt-3">
									<Button variant="primary" className="edit-btn">
										<Link to={`/admin/update-customer/${customer.id}`}>
											Update
										</Link>
									</Button>
									<Button
										variant="delete"
										className="delete-btn"
										onClick={() =>
											customer.id && deleteCustomerHandler(customer.id)
										}
									>
										Delete
									</Button>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
