export default function AuthHeader() {
	let cookieValue = document.cookie;
	console.log("====================================");
	console.log(cookieValue);
	console.log("====================================");
	if (cookieValue && cookieValue.get("token")) {
		console.log(cookieValue);
		return JSON.parse(cookieValue.get("token"));
	} else {
		console.log(cookieValue);
		return "";
	}
}
