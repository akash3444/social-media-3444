import axios from "axios";
import { useMutation } from "react-query";

const createPost = async ({ variables }) => {
    const { token, caption, image } = variables;

    axios.defaults.headers['x-auth-token'] = token;
    const { data } = await axios.post(`https://akash3444-social-media.herokuapp.com/posts`, { caption, image })
    return data;
}

export const useCreatePost = () => useMutation(createPost);