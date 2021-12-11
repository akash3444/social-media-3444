import React from "react";
// import { useQuery } from '@apollo/client';
import { Popover } from "@headlessui/react";
import OutlineHeart from "../icons/OutlineHeart";
// import { GET_ACTIVITY } from "../../queries";
// import { useUserData } from "../../hooks/useUserData";
import Activity from './Activity';

const ActivityFeed = () => {
	// const { token } = useUserData();
	// const queryOptions =  {
	// 	variables: {
	// 		token
	// 	}
	// }
	// const { data, error, loading } = useQuery(GET_ACTIVITY, queryOptions);

	return (
		<Popover className='relative'>
			{({ open }) => (
				<>
					<Popover.Button className='relative top-1'>
						<OutlineHeart />
					</Popover.Button>

					{/* <Popover.Overlay
            		className={`${
              		open ? 'opacity-30 fixed inset-0' : 'opacity-0'
					} bg-black`}
				/> */}

					<Popover.Panel
						className='absolute -right-4 border h-96 w-96 bg-white shadow-xl rounded-lg overflow-scroll'
						style={{ top: "calc(100% + .5rem)" }}>
						<div>
							{/* {loading && "Loading..."}
					{error && "Error" + error.message}
					{console.log(data)}
					{data && data.activities.map(({ id, user, text, profilePicture, createdAt}) => (
						<Activity key={id} username={user.username} profilePicture={profilePicture} text={text} createdAt={createdAt} />					
					))} */}
						</div>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
};

export default ActivityFeed;
