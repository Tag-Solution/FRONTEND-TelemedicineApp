import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";
import { links } from "./utils/routes_constants";

import {
	Homepage,
	AboutPage,
	ContactPage,
	Error,
	LoginPage,
	RegisterPage,
	Dashboard,
} from "./pages";
import { Sidebar, Navbar, DashboardNavigation } from "./components";

import { useAuthenticationContext } from "./context/AuthenticationContext";

function App() {
	// Authentication:
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { cookies } = useAuthenticationContext();

	useEffect(() => {
		let isAuth = cookies.token;
		if (isAuth) setIsAuthenticated(true);
	}, [cookies]);

	// Main:
	return (
		<>
			<ScrollToTop></ScrollToTop>

			{/* Navigation */}
			{!isAuthenticated ? (
				<React.Fragment>
					<Navbar></Navbar>
					<Sidebar></Sidebar>
				</React.Fragment>
			) : (
				<DashboardNavigation></DashboardNavigation>
			)}

			{/* Routes */}
			<Routes>
				{!isAuthenticated ? (
					<Route
						path={links.at(0).path}
						exact
						element={<Homepage></Homepage>}
					></Route>
				) : (
					<React.Fragment>
						<Route
							path={links.at(5).path}
							element={<Dashboard></Dashboard>}
						></Route>
					</React.Fragment>
				)}
				<Route
					path={links.at(1).path}
					element={<AboutPage></AboutPage>}
				></Route>
				<Route
					path={links.at(2).path}
					element={<ContactPage></ContactPage>}
				></Route>
				<Route
					path={links.at(3).path}
					element={<RegisterPage></RegisterPage>}
				></Route>
				<Route
					path={links.at(4).path}
					element={<LoginPage></LoginPage>}
				></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</>
	);
}

export default App;
