import React from "react";
// import { useUserData } from "../hooks/useUserData";

export const Sidebar = () => {
	// const { username } = useUserData();

	return (
		<aside
			className='hidden lg:block sticky top-14 w-full max-w-xs bg-gray-100 py-14 px-5 flex-1'
			style={{ height: "calc(100vh - 3.5rem)", zIndex: -1 }}>
			{/* User Info */}
			<div className='flex items-center space-x-5'>
				<div className='h-16 w-16 bg-gray-300 rounded-full'></div>
				<div>
					{/* <h5 className='font-bold text-left'>{username}</h5> */}
					{/* <span className="text-gray-700">displayName</span> */}
				</div>
			</div>

			<div className='mt-6'>
				<div className='flex items-center justify-between'>
					<h5 className='font-bold text-gray-600'>Suggestions For You</h5>
					<h6 className='text-sm font-bold text-indigo-600'>See All</h6>
				</div>

				{/* Suggestions */}
				<div className='flex items-center justify-between mt-3'>
					<div className='space-x-5 flex items-center'>
						<div className='h-10 w-10 bg-gray-300 rounded-full'></div>
						<div>
							<h5 className='font-bold text-left'>username</h5>
							<span className='text-gray-700'>Followed by ...</span>
						</div>
					</div>
					<h6 className='text-sm font-bold text-indigo-600'>Follow</h6>
				</div>
			</div>
		</aside>
	);
};
