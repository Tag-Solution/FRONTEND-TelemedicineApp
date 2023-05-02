// Images:
import LandingBG from "../../assets/temp/pexels-cedric-fauntleroy-4270088.jpg";

/***************************
 * === Services ===
 ***************************/
export const services = [
	{
		id: 1,
		title: "Telehealth",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: null,
				alt: "Telehealth Service",
			},
		],
	},
	{
		id: 2,
		title: "Mobile",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: null,
				alt: "Mobile Service",
			},
		],
	},
	{
		id: 3,
		title: "Personal Portal",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: null,
				alt: "Portal Service",
			},
		],
	},
	{
		id: 4,
		title: "Support",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: null,
				alt: "Support Service",
			},
		],
	},
];

/***************************
 * === Homepage ===
 ***************************/

// Landing:
export const landingPage = {
	title: "Lorem ipsum dolor sit.",
	text: "Lorem ipsum dolor sit amet amet, adipisicing elit. Molestiasdeleniti repellendus illo libero corrupti ratione dolore tempora architecto?",
	images: [
		{
			id: 1,
			imageUrl: LandingBG,
			alt: "Homepage",
		},
	],
};

// Services:
export const servicesPage = {
	title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas enim vero reiciendis dicta porro maiores modi?",
	servicesList: services,
};
