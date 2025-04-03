import { FaCog } from "../icons";
import { NavLink } from "react-router";

export const Footer = () => {
	return (
		<div className="p-4 text-center flex flex-col">
			<NavLink to={"/admin/manage-products"} className="text-[var(--moss-green)] flex items-center gap-3 justify-center">
            	<FaCog className="text-[var(--moss-green)]" /> Admin Dashboard
        	</NavLink>
            <p> This is a school project made by Karina Allard, FSU24D at Medieinstitutet.</p>
		</div>
	);
};
