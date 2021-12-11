import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const removeBookmark = async ({ variables }) => {
    const { postId, token } = variables;
    axios.defaults.headers['x-auth-token'] = token
    const { data } = await axios.delete(`https://akash3444-social-media.herokuapp.com/posts/${postId}/bookmark`);

    return data;
}


export const useRemoveBookmark = () => {
    const queryClient = useQueryClient()

    return useMutation(removeBookmark, {
        onMutate: async ({ variables }) => {
            await queryClient.cancelQueries(['posts'], { exact: false })
            const previousPosts = queryClient.getQueryData(['posts'], { exact: false });
            console.log('PREVIOUS POSTS', previousPosts);
            // console.log("NEW DATA", newData)
            const newPosts = previousPosts.map(post => {
                if (post._id === variables.postId) {
                    post.isBookmarked = false;
                }
                return post
            })
            console.log("NEW POSTS", newPosts)
            queryClient.setQueryData(['posts'], newPosts)

            return { previousPosts }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, newTodo, context) => {
            queryClient.setQueryData(['posts'], context.previousPosts)
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries(['posts'])
        },
    })
};
