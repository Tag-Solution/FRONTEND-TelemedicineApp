import AxiosConfig from "./axios/config/axios.config";
import { API_REGISTER, API_LOGIN } from "../utils/api_constants";

export function registerUser(body) {
	return AxiosConfig.post(API_REGISTER, body, {
		validateStatus: function (status) {
			return status < 500;
		},
	});
}

export function loginUser(body) {
	return AxiosConfig.post(API_LOGIN, body, {
		validateStatus: function (status) {
			return status < 500;
		},
	});
}
