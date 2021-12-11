import axios from "axios";
import { useQuery } from "react-query"
import { useAuth } from "./use-auth"

const getPosts = async ({ queryKey }) => {
    const [_, token] = queryKey;
    console.log('TOKEN', token)
    const { data } = await axios.get('https://akash3444-social-media.herokuapp.com/posts', {
        headers: {
            'x-auth-token': token
        }
    })
    return data;
}

export const usePosts = () => {
    const { user: { token } } = useAuth();
    const data = useQuery(['posts', token], getPosts)
    return data
}