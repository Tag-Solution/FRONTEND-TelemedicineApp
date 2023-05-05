// Images:
import LandingBG from "../../assets/temp/pexels-cedric-fauntleroy-4270088.jpg";
import Service1 from "../../assets/temp/pexels-ekaterina-bolovtsova-4049876.jpg";
import Service2 from "../../assets/temp/pexels-edward-jenner-4031820.jpg";
import Service3 from "../../assets/temp/pexels-tatiana-syrikova-3975570.jpg";
import Service4 from "../../assets/temp/pexels-rfstudio-3825539.jpg";

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
				imageUrl: Service1,
				alt: "Telehealth Service",
				isSelected: true,
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
				imageUrl: Service2,
				alt: "Mobile Service",
				isSelected: true,
			},
		],
	},
	{
		id: 3,
		title: "User Portal",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: Service3,
				alt: "Portal Service",
				isSelected: true,
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
				imageUrl: Service4,
				alt: "Support Service",
				isSelected: true,
			},
		],
	},
	{
		id: 5,
		title: "Support",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: Service4,
				alt: "Support Service",
				isSelected: true,
			},
		],
	},
	{
		id: 6,
		title: "Support",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: Service4,
				alt: "Support Service",
				isSelected: true,
			},
		],
	},
	{
		id: 7,
		title: "Support",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		images: [
			{
				id: 1,
				imageUrl: Service4,
				alt: "Support Service",
				isSelected: true,
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
			isSelected: true,
		},
	],
};

// Services:
export const servicesPage = {
	title: "Lorem ipsum dolor sit amet consectetur.",
	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas enim vero reiciendis dicta porro maiores modi?",
	servicesList: services,
};
