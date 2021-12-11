import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const commentPost = async ({ variables }) => {
    const { postId, text, username, token } = variables;
    axios.defaults.headers['x-auth-token'] = token;
    const { data } = await axios.patch(`https://akash3444-social-media.herokuapp.com/posts/${postId}/comment`, { text })

    return data;
}

export const useComment = () => {
    const queryClient = useQueryClient();
    return useMutation(commentPost, {
        onMutate: async ({ variables: { postId, text, username } }) => {
            await queryClient.cancelQueries(['posts'], { exact: false })

            const previousPosts = queryClient.getQueryData(['posts'], { exact: false });
            // const newPosts = previousPosts.map(post => post._id === postId ? ({ ...post, comments: [...post.comments, { _id: 'newcomment121323', text, user: { _id: 'newcommentuser122334', username, displayName: '' } }] }) : post);
            const newPosts = previousPosts.map(post => {
                if (post._id === postId) {
                    post.comments.push({ _id: 'newcomment121323', text, user: { _id: 'newcommentuser122334', username, displayName: '' } })
                }
                return post;
            })
            queryClient.setQueryData(['posts'], newPosts);

            return { previousPosts }
        },
        onError: (err, vars, context) => {
            queryClient.setQueryData(['posts', context.previousPosts]);
        },
        onSettled: newData => {
            queryClient.invalidateQueries(['posts'])
        }
    })
}