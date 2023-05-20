// API Constants:
export const BASE_URL = "https://telemedicine-app.herokuapp.com";
export const API_BASE_URL = BASE_URL + "/api/v1";

export const API_TEST_GET = API_BASE_URL + "/test";

/***************************
 * === User Actions ===
 ***************************/

// Auth:
export const API_REGISTER = BASE_URL + "/auth/register";
export const API_LOGIN = BASE_URL + "/auth/login";
export const API_ME = BASE_URL + "/auth/me";

/***************************
 * === Website ===
 ***************************/

// Homepage:
export const API_HOME_GET = API_BASE_URL + "/home-page/get";
export const API_HOME_POST = API_BASE_URL + "/home-page/create";

// AboutUs:
export const API_ABOUTUS_GET = API_BASE_URL + "/about-page/get";
export const API_ABOUTUS_POST = API_BASE_URL + "/about-page/create";

// Owner:
export const API_OWNER_GET = API_BASE_URL + "/owner-page/get";
export const API_OWNER_POST = API_BASE_URL + "/owner-page/create";
