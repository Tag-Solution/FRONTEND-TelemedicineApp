import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuthenticationContext } from "./AuthenticationContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { cookies } = useAuthenticationContext();

	// Current User:
	useEffect(() => {
		let isAuth = cookies.token ? true : false;
		if (isAuth) setIsAuthenticated(true);
	}, [cookies, isAuthenticated]);

	const value = {
		isAuthenticated,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	return useContext(UserContext);
};
