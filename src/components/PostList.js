import React from "react";
import { useQuery } from "react-query";
import { usePosts } from "../hooks/use-posts";
import { Post } from "./post";
// import { useQuery } from "@apollo/client";
// import { GET_RELATED_POSTS } from "../queries";
import { Spinner } from "../shared/Spinner";
// import { useUserData } from "../hooks/useUserData";



export const PostList = () => {
	const { isLoading, error, data } = usePosts();
	console.log('posts', data)
	return (
		<>
			{isLoading && (
				<div className='pt-14 flex-1 max-w-xl mx-auto lg:mx-0 flex justify-center'>
					<Spinner />
				</div>
			)}
			{error && (
				console.log(error.message)
			)}
			{
				data && (<div className='flex-1 my-8 space-y-10 px-5'>
					{data?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
				)}
		</>
	);
};
