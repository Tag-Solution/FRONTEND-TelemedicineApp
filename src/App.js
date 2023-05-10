import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";
import { routes } from "./utils/routes_constants";

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
		let isAuth = cookies.token ? true : false;
		if (isAuth) setIsAuthenticated(true);
	}, [cookies, isAuthenticated]);

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
						path={routes.at(0).path}
						exact
						element={<Homepage></Homepage>}
					></Route>
				) : (
					<React.Fragment>
						<Route
							path={routes.at(0).path}
							exact
							element={<Dashboard></Dashboard>}
						></Route>
					</React.Fragment>
				)}
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
				{!isAuthenticated ? (
					<Route path="*" element={<Error></Error>}></Route>
				) : (
					<Route path="*" element={<Dashboard></Dashboard>}></Route>
				)}
			</Routes>
		</>
	);
}

export default App;
