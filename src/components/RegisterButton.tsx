import Link from "next/link";
import { cn } from "../lib/utils";

interface RegisterButtonProps {
	isMobile?: boolean;
	onClick?: () => void;
	className?: string;
}

const RegisterButton = ({
	isMobile = false,
	onClick,
	className,
}: RegisterButtonProps) => {
	const classes = cn(
		"btn-primary",
		isMobile
			? "w-full px-6 py-3 text-sm font-medium rounded-md"
			: "px-6 py-2 text-lg font-light rounded-md hover:-translate-y-1",
		className
	);

	return (
		<Link href="/attendee-registration" className={classes} onClick={onClick}>
			Register
		</Link>
	);
};

export default RegisterButton;
