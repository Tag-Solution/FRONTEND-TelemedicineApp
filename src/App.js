import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";
import { links } from "./utils/routes_constants";

import { Homepage, AboutPage, ContactPage, Error } from "./pages";
import { Sidebar, Navbar } from "./components";

function App() {
	return (
		<BrowserRouter basename="/FRONTEND-TelemedicineApp">
			<ScrollToTop></ScrollToTop>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<Routes>
				<Route path={links.at(0).path} element={<Homepage></Homepage>}></Route>
				<Route
					path={links.at(1).path}
					element={<AboutPage></AboutPage>}
				></Route>
				<Route
					path={links.at(2).path}
					element={<ContactPage></ContactPage>}
				></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
