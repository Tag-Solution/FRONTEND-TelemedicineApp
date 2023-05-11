import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";
import { dashboard_links, routes } from "./utils/routes_constants";

import {
	Homepage,
	AboutPage,
	ContactPage,
	Error,
	LoginPage,
	RegisterPage,
	SharedLayout,
	Profile,
	Contacts,
	SingleContact,
	Calls,
	Settings,
} from "./pages";
import { Sidebar, Navbar } from "./components";

import { useAuthenticationContext } from "./context/AuthenticationContext";

function App() {
	// Authentication:
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { cookies } = useAuthenticationContext();

	useEffect(() => {
		let isAuth = cookies.token ? true : false;
		if (isAuth) setIsAuthenticated(true);
	}, [cookies, isAuthenticated]);

	// Main:
	return (
		<>
			<ScrollToTop></ScrollToTop>

			{/* Navigation */}
			{!isAuthenticated && (
				<React.Fragment>
					<Navbar></Navbar>
					<Sidebar></Sidebar>
				</React.Fragment>
			)}

			{/* Routes */}
			<Routes>
				{!isAuthenticated ? (
					<React.Fragment>
						<Route
							path={routes.at(0).path}
							exact
							element={<Homepage></Homepage>}
						></Route>
						<Route
							path={routes.at(1).path}
							element={<AboutPage></AboutPage>}
						></Route>
						<Route
							path={routes.at(2).path}
							element={<ContactPage></ContactPage>}
						></Route>
						<Route
							path={routes.at(3).path}
							element={<RegisterPage></RegisterPage>}
						></Route>
						<Route
							path={routes.at(4).path}
							element={<LoginPage></LoginPage>}
						></Route>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Route
							path={routes.at(0).path}
							element={<SharedLayout></SharedLayout>}
						>
							<Route index element={<Profile></Profile>}></Route>
							<Route
								path={dashboard_links.at(1).path}
								element={<Contacts></Contacts>}
							></Route>
							<Route
								path={dashboard_links.at(2).path}
								element={<Calls></Calls>}
							></Route>
							<Route
								path={dashboard_links.at(3).path}
								element={<Settings></Settings>}
							></Route>
						</Route>
					</React.Fragment>
				)}

				{!isAuthenticated ? (
					<Route path="*" element={<Error></Error>}></Route>
				) : (
					<Route path="*" element={<SharedLayout></SharedLayout>}></Route>
				)}
			</Routes>
		</>
	);
}

export default App;
