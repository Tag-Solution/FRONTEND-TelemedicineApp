import { createContext, useContext, useReducer } from "react";
import { useCookies } from "react-cookie";

const initialState = {
	isLoading: false,
	user: null,
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [cookies] = useCookies();

	// Me Data:
	const fetchUserData = () => {};

	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	return useContext(UserProvider);
};
