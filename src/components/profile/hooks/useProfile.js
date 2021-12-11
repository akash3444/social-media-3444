import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../../hooks/use-auth";

const getUserProfile = async ({ queryKey }) => {
    const [_, { token, username }] = queryKey;
    const { data } = await axios.get(`https://akash3444-social-media.herokuapp.com/users/${username}`, {
        headers: {
            'x-auth-token': token
        }
    })
    return data;
}

export const useProfile = (username) => {
    const { user: { token } } = useAuth();
    return useQuery(['userProfile', { token, username }], getUserProfile);
}