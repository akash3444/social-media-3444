import React from "react";

const PostBody = ({ image }) => {
	return (
		<div className='w-full'>
			<img src={image} alt='Post' className='bg-cover w-full h-auto select-none' />
		</div>
	);
};

export default PostBody;
