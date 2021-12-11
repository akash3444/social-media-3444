import React from "react";
import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import { ProfilePost } from "./Post";
import { Follow } from "./Follow";
// import { GET_USER } from "../../queries";
import { Spinner } from "../../shared/Spinner";
import { useProfile } from "./hooks/useProfile";
import { useAuth } from "../../hooks/use-auth";
// import { useUserData } from "../../hooks/useUserData";

export const Profile = (props) => {
	const { username } = useParams();
	const { isLoading, error, data: user } = useProfile(username);
	const { user: currentUser } = useAuth();

	const getNounedText = (n, singular, plural) => n === 0 || n > 1 ? plural : singular

	return (
		<>	{isLoading && <div className='pt-14 flex-1 max-w-xl flex justify-center'>
			<Spinner />
		</div>}
			{error && "Error"}
			{user && (
				<>
					<div className='py-10 space-y-14 w-full max-w-screen-lg mx-auto'>
						{/* Top */}
						<div className='flex space-x-6 md:space-x-10 px-10'>
							<img
								src='https://picsum.photos/500/500'
								alt='Avatar'
								className='h-20 w-20 md:h-28 md:w-28 rounded-full'
							/>
							<div className='pt-3'>
								<div className='flex items-center space-x-5'>
									<h4 className='text-2xl text-gray-700'>{user.username}</h4>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
										/>
									</svg>
								</div>

								{/* Statistics for md screens */}
								<div className='hidden md:flex w-full py-2 space-x-12'>
									<div className='flex items-center'>
										<h4 className='font-bold'>{user.posts.length}</h4>
										<span className="text-gray-700 ml-1">posts</span>
									</div>

									<div className='flex items-center'>
										<h4 className='font-bold'>{user.followers.length}</h4>
										<span className="text-gray-700 ml-1">{getNounedText(user.followers.length, "follower", "followers")}</span>
									</div>

									<div className='flex items-center'>
										<h4 className='font-bold'>{user.followings.length}</h4>
										<span className="text-gray-700 ml-1">{getNounedText(user.followings.length, "following", "followings")}</span>
									</div>
								</div>
								{username !== currentUser.username && <Follow
									isFollowing={user.isFollowing}
									user={user._id}
								/>}
								{console.log(username, currentUser)}
							</div>
						</div>
						{/* Statistics for mobile devices*/}
						<div className='flex md:hidden w-full border-t border-b border-gray-300 py-2 px-5'>
							<div className='flex-1 flex flex-col items-center'>
								<h4 className='text-sm font-bold'>{user.posts.length}</h4>
								<span className="text-gray-500 -mt-1">posts</span>
							</div>

							<div className='flex-1 flex flex-col items-center'>
								<h4 className='text-sm font-bold'>{user.followers.length}</h4>
								<span className="text-gray-500 -mt-1">followers</span>
							</div>

							<div className='flex-1 flex flex-col items-center'>
								<h4 className='text-sm font-bold'>{user.followings.length}</h4>
								<span className="text-gray-500 -mt-1">following</span>
							</div>
						</div>
						{/* Posts */}
						<div className='grid grid-cols-1 gap-y-10 sm:gap-x-10 sm:grid-cols-2 md:grid-cols-3 px-10'>
							{user.posts.map(post => (
								<ProfilePost key={post._id} {...post} />
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
};
