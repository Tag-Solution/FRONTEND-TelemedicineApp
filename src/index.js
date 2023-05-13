import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { NavigationProvider } from "./context/NavigationContext";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename="/FRONTEND-TelemedicineApp">
		<AuthenticationProvider>
			<UserProvider>
				<NavigationProvider>
					<App />
				</NavigationProvider>
			</UserProvider>
		</AuthenticationProvider>
	</BrowserRouter>
);
