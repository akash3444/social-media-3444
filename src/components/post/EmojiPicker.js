import React from "react";
import { Popover } from "@headlessui/react";
import OutlineEmoji from "../icons/OutlineEmoji";
import Picker from 'emoji-picker-react';

const EmojiPicker = ({ inputRef, text, setText }) => {

	const onEmojiClick = (e, emojiObject) => {
		// IE
		if (document.selection) {
			inputRef.current.focus();
			const sel = document.selection.createRange();
			sel.text = emojiObject.emoji;
		} else if ( /* Others */
			inputRef.current.selectionStart ||
			inputRef.current.selectionStart === '0'
		) {
			const startPosition = inputRef.current.selectionStart;
			const endPosition = inputRef.current.selectionEnd;
			setText(currText => {
				return (
					currText.substr(0, startPosition) +
					emojiObject.emoji +
					currText.substr(endPosition, currText.length)
				);
			});
			console.log(startPosition, endPosition);
		} else {
			/* Append at last */
			setText(curr => curr + emojiObject.emoji);
		}
	};
	return (
		<Popover className='relative'>
			<Popover.Button className='flex justify-center items-center h-8 w-8 hover:bg-gray-100 uppercase rounded-full'>
				<OutlineEmoji />
			</Popover.Button>
			<Popover.Panel
				className='absolute left-0 w-52 border bg-white shadow-xl rounded-lg'
				style={{ bottom: 'calc(100% + 1rem)' }}
			>
				<Picker onEmojiClick={onEmojiClick} preload={true} />
			</Popover.Panel>
		</Popover>
	);
};

export default EmojiPicker;
