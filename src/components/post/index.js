import React, { useState, useRef } from "react";
// import {
// 	LIKE_POST,
// 	UNLIKE_POST,
// 	ADD_BOOKMARK,
// 	REMOVE_BOOKMARK,
// } from "../../queries";
// import { useMutation } from "@apollo/client";
// import { useUserData } from "../../hooks/useUserData";
import PostHeader from "./Header";
import PostBody from "./Body";
import PostFooter from "./Footer";

export const Post = ({ post }) => {
	console.log("POST", post)
	const likes = useRef(post.likesCount)
	const isLiked = useRef(post.isLiked);
	const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
	// const { token } = useUserData();
	// const [likePost] = useMutation(LIKE_POST);
	// const [unlikePost] = useMutation(UNLIKE_POST);
	// const [addBookmark, { data: addBookmarkResponse }] = useMutation(
	// 	ADD_BOOKMARK
	// );
	// const [removeBookmark] = useMutation(
	// 	REMOVE_BOOKMARK
	// );

	// const bookmarkVariables = {
	// 	token,
	// 	postId: post.id,
	// };

	// console.log(addBookmarkResponse);

	// const handleBookmark = () => {
	// 	console.log("isBookmarked", isBookmarked);
	// 	!isBookmarked
	// 		? addBookmark({
	// 				variables: bookmarkVariables,
	// 		  })
	// 		: removeBookmark({
	// 				variables: bookmarkVariables,
	// 		  });
	// 	setIsBookmarked((curr) => !curr);
	// };

	// const likeMutationVariables = {
	// 	variables: {
	// 		token,
	// 		postId: post.id,
	// 	},
	// };

	// const handleLike = () => {
	// 	if(isLiked.current) {
	// 		unlikePost(likeMutationVariables);
	// 		likes.current -= 1;
	// 		isLiked.current = false;
	// 	} else {
	// 		likePost(likeMutationVariables);
	// 		likes.current += 1;
	// 		isLiked.current = true;
	// 	}
	// };

	return (
		<div className='w-full bg-white shadow max-w-xl mx-auto overflow-hidden'>
			{/* Post Header */}
			<PostHeader author={post.user} />

			{/* Post Body */}
			<PostBody image={post.image} />

			{/* Post Footer */}
			<PostFooter
				post={post}
				isBookmarked={post.isBookmarked}
			/>
		</div>
	);
};
