import React from "react";

export const Button = ({ children, className, primary, lg, isLoading, ...other }) => {
	// console.log(other);;
	const bgColor = !isLoading && primary ? 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500 focus:bg-gray-500';
	const size = lg ? 'h-11 py-2 font-medium' : 'h-10 py-1.5 font-medium'
	return (
		<button
			className={`${bgColor} ${size} ${isLoading && 'cursor-not-allowed'} tracking-wide w-full text-white rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-indigo-500 ${className}`}
			{...other}>
			{children}
		</button>
	);
};
