import React from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./Sidebar";
// import { Login } from "./Login";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
	// const authToken = localStorage.getItem("x-auth-token");
	// const [token, setToken] = useState(authToken);
	// useEffect(() => {
	// 	setToken(authToken);
	// }, [authToken]);
	const location = useLocation();
	return (
		<>

			<Navbar />
			<main className='lg:flex max-w-screen-lg mx-auto justify-center lg:space-x-10'>
				{children}
				{location.pathname === "/" && <Sidebar />}
			</main>

		</>
	);
};
