import React from 'react'

import OutlineBookmark from "../icons/OutlineBookmark";
import FillBookmark from "../icons/FillBookmark";
import { useAuth } from '../../hooks/use-auth';
import { useAddBookmark } from "./hooks/useAddBookmark";
import { useRemoveBookmark } from "./hooks/useRemoveBookmark";

const Bookmark = ({ postId, isBookmarked }) => {
    const { user: { token } } = useAuth();
    const addBookmark = useAddBookmark();
    const removeBookmark = useRemoveBookmark();

    const variables = { postId, token }
    return isBookmarked ? (
        <div
            onClick={() => removeBookmark.mutate({ variables })}
            className='cursor-pointer'>
            <FillBookmark />
        </div>
    ) : (
        <div
            onClick={() => addBookmark.mutate({ variables })}
            className='cursor-pointer'>
            <OutlineBookmark />
        </div>
    )
}

export default Bookmark
