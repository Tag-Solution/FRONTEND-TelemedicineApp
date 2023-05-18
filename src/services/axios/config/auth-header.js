export default function AuthHeader() {
	let cookieValue = document.cookie?.split("=")[1];

	if (cookieValue != undefined) {
		return cookieValue;
	} else {
		return null;
	}
}
