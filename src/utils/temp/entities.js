// Imports:
import NoAvatar from "../../assets/static/Profile-Image-Placeholder.jpg";
import NoCover from "../../assets/static/Cover-Image-Placeholder.jpg";

/* ======================================================================== */
/* 1. User Entity */
/* ======================================================================== */

export const userProfile = {
	avatar: NoAvatar,
	coverImage: NoCover,
};

export const userEntity = {
	id: 1,
	firstName: "Homero",
	lastName: "Simpson",
	email: "homero@test.com",
	userProfile: userProfile,
};
