import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AxiosConfig from "../services/axios/config/axios.config";
import { API_LOGIN } from "../utils/api_constants";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
	const navigate = useNavigate();
	const [cookies, setCookies, removeCookie] = useCookies();

	const loginUser = (body) => {
		AxiosConfig.post(API_LOGIN, body, {
			validateStatus: function (status) {
				return status < 500;
			},
		})
			.then((response) => {
				setCookies("token", response.data.jwt);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const logoutUser = () => {
		["token"].forEach((obj) => removeCookie(obj));
		navigate("/");
	};

	const value = useMemo(
		() => ({
			cookies,
			loginUser,
			logoutUser,
		}),
		[cookies]
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
