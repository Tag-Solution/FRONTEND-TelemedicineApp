import axios from "axios";
import AuthHeader from "./auth-header";
import { BASE_URL } from "../../../utils/api_constants";

// Default Axios Config:
export default axios.create({
	base_url: BASE_URL,
	headers: {
		Authorization: AuthHeader(),
	},
});
