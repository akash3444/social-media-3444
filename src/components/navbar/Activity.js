import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Activity = ({ username, profilePicture, text, createdAt }) => {
	return(
		<div className="flex items-center p-4">
			<div>
				<img src={profilePicture || 'https://picsum.photos/100/100'} alt={username} className="h-12 w-12 rounded-full ring-1 ring-offset-2 mr-5"/>
			</div>
			<div>
				<b>{username}</b>
				<span className="text-gray-700 ml-0.5">{text}</span>
				<p className="-mt-1 text-gray-500 text-sm">{formatDistanceToNow(new Date(parseInt(createdAt)))}</p>
			</div>
		</div>
	)
}

export default Activity;