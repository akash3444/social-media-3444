import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "../../../hooks/use-auth";

const followUser = async ({ variables }) => {
    const { token, userToFollow } = variables;
    axios.defaults.headers['x-auth-token'] = token;
    const { data } = await axios.patch(`https://akash3444-social-media.herokuapp.com/users/follow/${userToFollow}`);
    return data
}

export const useFollow = () => {
    // const { user: { token }} = useAuth();
    const queryClient = useQueryClient();
    return useMutation(followUser, {
        onMutate: async ({ variables }) => {
            await queryClient.cancelQueries(['userProfile'], { exact: false });

            const previousUserProfile = queryClient.getQueryData(['userProfile'], { exact: false });

            const newUserProfile = { ...previousUserProfile, followers: [...previousUserProfile.followers, variables.userToFollow], isFollowing: true };
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