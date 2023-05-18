import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { API_REGISTER, API_LOGIN } from "../utils/api_constants";
import setAuthHeader from "../services/axios/config/auth-header";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
	const [isAuthenticating, setIsLoading] = useState(false);
	const [cookies, setCookies, removeCookie] = useCookies();
	const navigate = useNavigate();

	// Register:
	const registerUser = (body) => {
		setIsLoading(true);
		axios
			.post(API_REGISTER, body, {
				validateStatus: function (status) {
					return status < 500;
				},
			})
			.then((response) => {
				setCookies("token", response.data.jwt);
				setAuthHeader();
				setIsLoading(false);
				navigate("/");
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	// Login:
	const loginUser = (body) => {
		setIsLoading(true);
		axios
			.post(API_LOGIN, body, {
				validateStatus: function (status) {
					return status < 500;
				},
			})
			.then((response) => {
				setCookies("token", response.data.jwt);
				setAuthHeader();
				setIsLoading(false);
				navigate("/");
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	// Logout:
	const logoutUser = () => {
		setIsLoading(true);
		["token"].forEach((obj) => removeCookie(obj));
		setIsLoading(false);
	};

	const value = useMemo(
		() => ({
			isAuthenticating,
			cookies,
			registerUser,
			loginUser,
			logoutUser,
		}),
		[cookies, isAuthenticating]
	);

	return (
		<AuthenticationContext.Provider value={value}>
			{children}
		</AuthenticationContext.Provider>
	);
};

export const useAuthenticationContext = () => {
	return useContext(AuthenticationContext);
};
