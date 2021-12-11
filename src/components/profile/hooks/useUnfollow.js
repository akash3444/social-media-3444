import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
// import { useAuth } from "../../../hooks/use-auth";

const unfollowUser = async ({ variables }) => {
    const { token, userToUnfollow } = variables;
    axios.defaults.headers['x-auth-token'] = token;
    const { data } = await axios.patch(`https://akash3444-social-media.herokuapp.com/users/unfollow/${userToUnfollow}`);
    return data
}

export const useUnfollow = () => {
    // const { user: { token }} = useAuth();
    const queryClient = useQueryClient();
    return useMutation(unfollowUser, {
        onMutate: async ({ variables }) => {
            await queryClient.cancelQueries(['userProfile'], { exact: false });

            const previousUserProfile = queryClient.getQueryData(['userProfile'], { exact: false });

            const newUserProfile = { ...previousUserProfile, followers: previousUserProfile.followers.splice(0, previousUserProfile.followers.length - 1), isFollowing: false };
            queryClient.setQueryData(['userProfile'], newUserProfile);

            return { previousUserProfile }
        },
        onError: ({ _, vars, context }) => {
            queryClient.setQueryData(['userProfile'], context.previousUserProfile);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['userProfile'], { exact: false });
        }
    })
}