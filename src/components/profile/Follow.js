// import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useFollow } from "./hooks/useFollow";
import { useUnfollow } from "./hooks/useUnfollow";
// import { FOLLOW, UNFOLLOW, CREATE_ACTIVITY, GET_USER } from "../../queries";
// import { useCountRenders } from "../../hooks/useCountRenders";

export const Follow = ({ isFollowing, user }) => {
	const { mutate: followUser, isLoading: isFollowingUser } = useFollow();
	const { mutate: unfollowUser, isLoading: isUnfollowingUser  } = useUnfollow();
	const { user: { token } } = useAuth();
	const handleFollow = () => {
		isFollowing ? unfollowUser({
			variables: {
				token,
				userToUnfollow: user
			}
		}) : followUser({
			variables: {
				token,
				userToFollow: user
			}
		})
	}
	// console.log(isLoading, isFollowing)
	return (
		<button
			className={`py-1.5 mt-3 px-4 rounded text-white ${isFollowingUser || isUnfollowingUser ? "cursor-not-allowed bg-indigo-400" : 'bg-indigo-600'
				}`}
			onClick={handleFollow}
			disabled={isFollowingUser || isUnfollowingUser}
		>
			{isFollowing  ? "Unfollow": "Follow"}
		</button>
	);
};
