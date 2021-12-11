import React from 'react'
import { useAuth } from '../../hooks/use-auth';
import { Transition } from "@headlessui/react";

import OutlineHeart from "../icons/OutlineHeart";
import FillHeart from "../icons/FillHeart";
import { useLikePost } from './hooks/useLikePost';
import { useUnlikePost } from './hooks/useUnlikePost';

const Like = ({ postId, isLiked }) => {
    const { user: { token } } = useAuth();
    const like = useLikePost();
    const unlike = useUnlikePost();

    const variables = { postId, token };

    const handleLike = () => {
        isLiked ? unlikePost() : likePost();
    }

    const likePost = () => {
        like.mutate({ variables })
    }

    const unlikePost = () => {
        unlike.mutate({ variables })
    }

    return (
        <div className='cursor-pointer '
            onClick={handleLike}
        >
            <Transition
                show={isLiked}
                appear={false}
                enter='transition duration-300 transform'
                enterFrom='scale-100'
                enterTo='scale-125'>
                <FillHeart />
            </Transition>
            <Transition
                show={!isLiked}
                appear={false}
                enter='transition duration-200 transform'
                enterFrom='scale-100'
                enterTo='scale-125'>
                <OutlineHeart />
            </Transition>
        </div>

    )
}

export default Like
