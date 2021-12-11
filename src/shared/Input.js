import React from "react";

const Input = ({ label, labelText, register, required, minLength, maxLength, min, max, pattern, ...others }) => {
	return (
		<>
			<label htmlFor={label} className="capitalize text-gray-700">{labelText || label}</label>
			<input
				className='border border-gray-300 block mt-1 w-full h-10 rounded-lg px-3 transition duration-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
				id={label}
				{...register(label, { required, minLength, maxLength, min, max, pattern })}
				{...others}
			/>
		</>
	);
};

export default Input;
