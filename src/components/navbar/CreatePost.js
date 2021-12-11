import React, { useState } from "react";
// import FileBase from "react-file-base64";
// import { useMutation } from "@apollo/client";
import { Dialog } from "@headlessui/react";
import { Button } from "../../shared/Button";
import { useUploadImage } from "./hooks/useUploadImage";
import { useCreatePost } from "./hooks/useCreatePost";
import { useAuth } from "../../hooks/use-auth";
// import { CREATE_POST } from "../../queries";
// import { useUserData } from "../../hooks/useUserData";
// import Input from "../../shared/Input";

export const CreatePost = ({ isOpen, setIsOpen }) => {
	const [image, setImage] = useState(null);
	const [caption, setCaption] = useState("");
	const { mutate: uploadImage, data, isLoading: isUploading } = useUploadImage();
	const { mutate: createPost, data: postData, isLoading } = useCreatePost()
	const {user} = useAuth();
	// const { token } = useUserData();
	// const [createPost, { loading, error }] = useMutation(CREATE_POST);

	const handleFileChange = (e) => {
		setImage(e.target.files[0])
	}

	console.log("CREATE POST", postData)

	const handleUpload = (e) => {
		if (image) {
			const formData = new FormData();

			formData.append('file', image);
			formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)

			console.log('FORM DATA', formData)
			uploadImage({
				variables: {
					formData
				}
			})
		}
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isUploading && data) {
			createPost({
				variables: {
					token: user?.token,
					caption,
					image: data.secure_url
				}
			})
		}
	}

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-sm mx-auto py-10 rounded'
			style={{
				boxShadow: "0 0 0 100vw rgba(0, 0, 0, .5)",
			}}>
			<Dialog.Overlay />
			<Dialog.Title className='text-2xl font-bold text-center mb-8'>
				Create Post
			</Dialog.Title>
			<div className='w-full grid place-items-center'>
				<div className='bg-white max-w-sm rounded px-6 w-full'>
					<form className='flex flex-col space-y-6' onSubmit={handleSubmit}>
						<input
							type='text'
							name='caption'
							placeholder='Caption'
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
						/>
						<input type="file" name="file" onChange={handleFileChange} />
						<button onClick={handleUpload}>{isUploading ? "Uploading" : "Upload"}</button>
						{data && <img src={data.secure_url} alt="abc" className="h-20 w-20" />}
						<Button type='submit'>{isLoading ? "Creating post..." : "Create Post"}</Button>
					</form>
				</div>
			</div>
		</Dialog>
	);
};
