import axios from "axios"
import { useMutation } from "react-query"

const uploadImage = async ({ variables }) => {
    const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URI, variables.formData)
    return data;
}

export const useUploadImage = () => useMutation(uploadImage);