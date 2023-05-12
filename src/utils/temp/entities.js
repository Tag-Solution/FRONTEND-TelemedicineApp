// Imports:
import NoAvatar from "../../assets/static/Profile-Image-Placeholder.jpg";
import NoCover from "../../assets/static/Cover-Image-Placeholder.jpg";

/* ======================================================================== */
/* 1. User Entity */
/* ======================================================================== */

const userProfile = {
	avatar: "NoAvatar",
	coverImage: "NoCover",
	description:
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, modi? adipisicing elit. Beatae, modi?",
	location: "California, USA",
	address: "288 Chemin de la Ramasse",
	cap: "74160",
	mobile: "+4179000000",
	job: "Front-End Developer",
};

export const userEntity = {
	id: 1,
	firstName: "Homero",
	lastName: "Simpson",
	email: "homero@test.com",
	userProfile: userProfile,
};
