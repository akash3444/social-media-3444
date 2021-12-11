import React from 'react'
import { HiUserCircle } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

const SearchResult = ({ data, setIsOpen }) => {
    const navigate = useNavigate();

    const handleClick = (username) => {
        navigate(`/${username}`);
        setIsOpen(false)
    }
    return data && data.users.length !== 0 ? (
        <div className='w-full max-h-52 self-start my-6 pr-3 overflow-y-auto custom-scrollbar divide-y'>
            {data.users.map(({ _id, username, displayName, profilePicture }) => (
                <div
                    key={_id}
                    className='cursor-pointer flex items-center gap-3 p-3 hover:bg-gray-100'
                    onClick={() => handleClick(username)}>
                    {profilePicture ? <img src={profilePicture} alt={username} className="h-14 w-14 rounded-full" /> : <HiUserCircle className="h-14 w-14 text-gray-400" />}
                    <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold">{username}</span>
                        <span>{displayName}</span>
                    </div>
                </div>
            ))}
        </div>
    ) :
        <span className='text-gray-500'>No users found</span>
}

export default SearchResult
