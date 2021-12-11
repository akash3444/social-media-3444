import React from "react";
import OutlineHeart from "../icons/OutlineHeart";

const Comment = ({ text, username }) => {
	return (
		<div className='flex items-center justify-between'>
			<p className='text-sm text-left space-x-2'>
				<b>{username}</b>
				<span>{text}</span>
			</p>
			<div>
				<OutlineHeart className='h-3 w-3' />
			</div>
		</div>
	);
};

export default Comment;
