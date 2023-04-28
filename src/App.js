import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Other/ScrollToTop";

import { Homepage } from "./pages";

function App() {
	return (
		<BrowserRouter basename="/FRONTEND-TelemedicineApp">
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
