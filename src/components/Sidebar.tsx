import { FaTimes } from "../icons";
import { Button } from "./Button";

type SidebarProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Sidebar = ({ isOpen, onClose, children }: SidebarProps) => {
	return (
		<div
			className={`fixed top-0 right-0 h-full w-80 bg-[var(--soft-ivory)] border-l-2 border-l-[var(--warm-light-gray)] transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
            <div className="flex justify-end p-4">
                <Button variant="transparent" onClick={onClose}>
                    <FaTimes className="text-[var(--moss-green)] hover:text-[var(--muted-gold)]" />
                </Button>
            </div>
            <div className="p-4">{children}</div>
        </div>
	);
};
