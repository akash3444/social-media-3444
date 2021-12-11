import { useQuery } from 'react-query';
import axios from 'axios';

import {useAuth} from '../../../hooks/use-auth';

const searchUser = async ({ queryKey }) => {
    const [_, { token, query }] = queryKey;
    console.log(token, query);
    const {data} = await axios.get(`https://akash3444-social-media.herokuapp.com/users/search/${query}`, {
        headers: {
            'x-auth-token': token
        }
    })
    console.log('SEARCH RESULT', data)
    return data
}

export const useSearchUser = (query) => {
    const { user } = useAuth();
    return useQuery(["search", { query, token: user?.token }], searchUser, { enabled: false })
};