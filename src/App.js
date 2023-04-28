import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";

import { Homepage, AboutPage, ContactPage, Error } from "./pages";

function App() {
	return (
		<BrowserRouter basename="/FRONTEND-TelemedicineApp">
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/about" element={<AboutPage></AboutPage>}></Route>
				<Route path="/contact" element={<ContactPage></ContactPage>}></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
