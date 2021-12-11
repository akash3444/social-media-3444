import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const unlikePost = async ({ variables }) => {
    const { postId, token } = variables;
    axios.defaults.headers['x-auth-token'] = token
    const { data } = await axios.patch(`https://akash3444-social-media.herokuapp.com/posts/unlike/${postId}`);

    return data;
}


export const useUnlikePost = () => {
    const queryClient = useQueryClient();
    return useMutation(unlikePost, {
        onMutate: async ({ variables }) => {
            await queryClient.cancelQueries(['posts'], { exact: false });

            const previousPosts = queryClient.getQueryData(['posts'], { exact: false });
            const newPosts = previousPosts.map(post => {
                if (post._id === variables.postId) {
                    post.likes.pop();
                    post.isLiked = false;
                }
                return post;
            })

            queryClient.setQueryData(['posts'], newPosts)

            return { previousPosts }
        },
        onError: (err, vars, context) => {
            queryClient.setQueryData(['[posts'], context.previousPosts);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['posts'])
        }
    })
}
