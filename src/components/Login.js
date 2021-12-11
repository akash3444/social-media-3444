import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md';
import { useAuth } from "../hooks/use-auth";
import { Button } from "../shared/Button";
import Input from "../shared/Input";

export const Login = () => {
	const { handleSubmit, register, formState: { errors } } = useForm()
	const navigate = useNavigate();
	const { user, login, isLogging, loginError } = useAuth();

	console.log('LOGIN', user)

	useEffect(() => {
		user && navigate('/')
	}, [user])

	const onSubmit = (data) => {
		const res = login(data);
	};

	return (
		<div className='h-screen w-full bg-gray-200 grid place-items-center'>
			<div className='bg-white w-full max-w-md py-12 px-8 rounded-lg'>
				<h2 className='text-3xl font-bold text-center mb-8'>Login</h2>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Input
							type='text'
							label="username"
							register={register}
							required
							pattern={/^[a-z0-9_-]{3,16}$/i}
							autoComplete='off'
						/>
						{errors.username && <span className="flex items-center gap-2 mt-1 text-red-600"><MdError size={20} /> {errors.username.type === "required" ? "Username is required" : "Invalid username"}</span>}
					</div>

					<div>
						<Input
							type='password'
							register={register}
							label="password"
							required
						// minLength={6}
						/>
						{errors.password && <span className="flex items-center gap-2 mt-1 text-red-600"><MdError size={20} /> {errors.password.type === "required" ? "Password is required" : "Password must be at least 6 characters long"}</span>}
					</div>

					<div>
						<p className='text-red-500 mb-2'>
							{/* {loginError && loginError.message} */}
						</p>
						<Button type="submit" primary lg isLoading={isLogging}>{isLogging ? 'Logging in...' : loginError ? 'Failed to login' : 'Login'}</Button>
					</div>

					<div>
						<p className='text-gray-700 text-center mb-3'>
							Don't have an account?
						</p>
						<Link to='/register'>
							<Button type='button' className='uppercase text-sm' lg>
								Register
							</Button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
