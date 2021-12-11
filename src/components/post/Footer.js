import React from "react";

import OutlineComment from "../icons/OutlineComment";
import OutlineShare from "../icons/OutlineShare";
import AddComment from "./AddComment";
import Bookmark from "./Bookmark";
import Comment from "./Comment";
import Like from "./Like";

const Footer = ({
	isBookmarked,
	post,
}) => {
	return (
		<div className='pt-4 space-y-2'>
			<div className='flex items-center justify-between text-gray-700 px-5'>
				<div className='flex space-x-4'>
					<Like postId={post._id} isLiked={post.isLiked} />
					<OutlineComment />
					<OutlineShare />
				</div>
				<Bookmark isBookmarked={isBookmarked} postId={post._id} />
			</div>

			{/* Likes */}
			<p className='text-left text-sm font-bold px-5'>
				{post.likes.length} {post.likes.length !== 1 ? "likes" : "like"}
			</p>

			{/* Caption */}
			<p className='text-sm text-left space-x-2 px-5'>
				<b>{post.user.username}</b>
				<span>{post.caption}</span>
			</p>

			{/* Comments */}
			{post?.comments?.length !== 0 && (
				<div className='w-full px-5'>
					<p className='font-medium text-gray-500 text-sm'>Comments</p>

					{post.comments.map(({ _id, text, user }) => (
						<Comment key={_id} text={text} username={user.username} />
					))}
				</div>
			)}

			<AddComment postId={post._id} />
		</div>
	);
};

export default Footer;
