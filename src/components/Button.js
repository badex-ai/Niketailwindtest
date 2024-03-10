import React from "react";

const Button = ({
	label,
	iconURL,
	background,
	textColor,
	borderColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex ml-2 justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none  ${
				background
					? `${background} ${textColor} ${borderColor}`
					: "bg-coral-red text-white border-coral-red"
			} ${fullWidth && "w-full"}`}
		>
			{label}
			{iconURL && <img src={iconURL} alt="arrow right" />}
		</button>
	);
};

export default Button;
