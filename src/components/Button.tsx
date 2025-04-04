// import "/src/styles/button.css"

interface IButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant: "submit" | "delete" | "primary" | "secondary";
}

export const Button = (props: IButtonProps) => {
    const baseStyles = "px-4 py-2 rounded-md font-semibold transition-all duration-200 ease-in-out cursor-pointer"

    const variants = {
        submit: "bg-[var(--vb-sage-green)] text-white hover:text-[var(--soft-ivory)] hover:bg-[var(--vb-sage-green-hv)]",
        delete: "bg-[var(--burnt-red)] text-white hover:text-[var(--soft-ivory)] hover:bg-[var(--burnt-red-hv)]",
        primary: "bg-[var(--muted-gold)] text-[var(--soft-ivory)] hover:bg-[var(--muted-gold-hv)]",
        secondary: "bg-transparent text-[var(--soft-charcoal)] border border-[var(--soft-charcoal)] hover:bg-[var(--light-ivory)] hover:text-[var(--dark-soft-charcoal)] hover:border-[var(--dark-soft-charcoal)]",
        disabled: "bg-gray-400 text-[var(--soft-ivory)] cursor-not-allowed",
    };

    const enabledStyles = props.disabled 
        ? variants.disabled 
        : variants[props.variant || "primary"];

    return (
        <button 
            type={props.type} 
            className={`${baseStyles} ${enabledStyles} ${props.className}`} 
            onClick={props.onClick} disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}