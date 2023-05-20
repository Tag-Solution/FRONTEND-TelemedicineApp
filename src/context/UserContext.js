import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import { useAuthenticationContext } from "./AuthenticationContext";
import { API_TEST_GET } from "../utils/api_constants";
import setAuthHeader from "../services/axios/config/auth-header";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userInContext, setUserInContext] = useState(null);
	const { cookies } = useAuthenticationContext();

	// Current User:
	useEffect(() => {
		let isAuth = cookies.token ? true : false;
		if (isAuth) {
			setIsAuthenticated(true);
			axios
				.get(API_TEST_GET, setAuthHeader())
				.then((res) => setUserInContext(res.data))
				.catch((e) => console.log(e));
		}
	}, [cookies, isAuthenticated]);

	const value = {
		isAuthenticated,
		userInContext,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	return useContext(UserContext);
};
