import axios from "axios";

export default function setAuthHeader() {
	let cookieValue = document.cookie?.split("=")[1];

	if (cookieValue !== undefined) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + cookieValue;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}
