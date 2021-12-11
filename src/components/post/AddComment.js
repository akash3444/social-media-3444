import React, { useState, useRef } from "react";
import { useAuth } from "../../hooks/use-auth";

// import { useMutation } from "@apollo/client";
// import { ADD_COMMENT, GET_RELATED_POSTS } from "../../queries";
// import { useUserData } from "../../hooks/useUserData";
import EmojiPicker from './EmojiPicker';
import { useComment } from "./hooks/useComment";

const AddComment = ({ postId }) => {
	const { user: { token, username } } = useAuth();
	const inputRef = useRef("");
	const [text, setText] = useState("");
	const { mutate } = useComment();

	const commentPost = (e) => {
		e.preventDefault();
		console.log('COMMENT', username, token, text, postId)
		mutate({
			variables: {
				postId,
				token,
				username,
				text
			}
		});
		setText("");
	}

	return (
		<form
			onSubmit={commentPost}
			className='h-14 flex items-center border-t px-5'
			style={{
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
			}}>
			{/*<OutlineEmoji />*/}
			<EmojiPicker inputRef={inputRef} text={text} setText={setText} />
			<input
				type='text'
				placeholder='Add a comment...'
				name='comment'
				ref={inputRef}
				value={text}
				onChange={(e) => setText(e.target.value)}
				className='mx-3 font-normal text-md focus:outline-none flex-1'
			/>
			<button
				className='focus:outline-none text-indigo-600 font-me'
				type="submit"
			>
				Post
			</button>
		</form>
	);
};

export default AddComment;
