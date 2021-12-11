import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import { Spinner } from "../../shared/Spinner";
import { Button } from "../../shared/Button";
import { useSearchUser } from './hooks/useSearchUser';
import SearchResult from "./SearchResults";

export const Search = ({ isOpen, setIsOpen }) => {
	const [query, setQuery] = useState("");
	const { data, isFetching, refetch, error } = useSearchUser(query);

	const handleChange = (e) => {
		setQuery(e.target.value)
	};

	const searchUser = (e) => {
		e.preventDefault();
		console.log('SEARCH', query)
		refetch();
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='z-20 absolute inset-0 m-auto transform  bg-white w-full max-w-sm pt-10 pb-0 rounded'
			style={{
				maxHeight: 'calc(100vh - 19rem)',
				boxShadow: '0 0 0 100vw rgba(0, 0, 0, .3)'
			}}
		>
			<div className='w-full h-full'>
				<div className='flex-1 h-full max-w-sm rounded space-y-3 pb-6 px-6 w-full flex flex-col'>
					<form onSubmit={searchUser}>
						<input
							type='text'
							value={query}
							placeholder='Search...'
							className='py-2 px-2 border border-gray-300 w-full rounded focus:outline-none focus:border-indigo-500 focus:ring-1 ring-indigo-500 transition duartion-300'
							onChange={handleChange}
						/>
					</form>
					<div className='flex-1 flex items-center justify-center'>
						{isFetching ? (
							<Spinner />
						) : error ? (
							"error"
						) : <SearchResult data={data} setIsOpen={setIsOpen} />}
					</div>
					<Button lg onClick={() => setIsOpen(false)} className="mt-auto">
						Close
					</Button>
				</div>
			</div>
		</Dialog>
	);
};
