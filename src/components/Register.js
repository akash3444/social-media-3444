import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from "../hooks/use-auth";
// import { useNavigate } from "react-router-dom";
import { Button } from "../shared/Button";
// import { REGISTER_USER } from "../queries";
import Input from "../shared/Input";

export const Register = () => {
	// const [registerStatus, setRegisterStatus] = useState("");
	const { handleSubmit, register, formState: { errors } } = useForm();
	const { register: registerUser } = useAuth();

	const onSubmit = async (data) => {
		console.log('register', data);
		await registerUser(data)
		// console.log('RegisterData', registerData)
		// if (error) {
		// 	toast.error('Register error!', {
		// 		position: "top-center",
		// 		autoClose: 5000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 	});
		// } else {
		// 	toast('Registered Successfully!')
		// }
	};

	return (
		<div className='min-h-screen w-full bg-gray-200 grid place-items-center'>
			<ToastContainer />
			<div className='bg-white w-full max-w-md py-12 px-8 rounded-md'>
				<h2 className='text-4xl font-bold text-center mb-8'>Register</h2>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Input
							type='text'
							label="username"
							autoComplete='off'
							register={register}
						/>
					</div>

					<div>
						<Input
							type='text'
							label="displayName"
							labelText="Full Name"
							autoComplete='off'
							register={register}
						/>
					</div>
					<div>
						<Input
							type='email'
							label="email"
							autoComplete='off'
							register={register}
						/>
					</div>
					<div>
						<Input
							type='password'
							label="password"
							autoComplete='off'
							register={register}
						/>
					</div>


					<div>
						<p className='text-red-500 mb-2'>
							{/* {error && error.message} */}
						</p>
						<Button type="submit" primary lg>Register</Button>
					</div>

					<div>
						<p className='text-gray-700 text-center mb-3'>
							Already have an account?
						</p>
						<Link to='/login'>
							<Button type='button' className='uppercase text-sm'>
								Log In
							</Button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
