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
		description:
			"Our app enables seamless video consultations with qualified doctors, allowing you to receive medical advice, diagnoses, and treatment plans without the need for in-person visits.",
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
		description:
			"With our Telemedicine App, you can access healthcare services anytime, anywhere, directly from your mobile device",
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
		description:
			"Provides a convenient and intuitive interface for managing your healthcare needs. Schedule appointments, view medical records, and securely communicate with healthcare providers—all in one centralized location.",
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
		description:
			"We pride ourselves on offering exceptional customer support to ensure a smooth and satisfying experience. Our dedicated support team is available to assist you with any questions or concerns you may have, providing personalized assistance every step of the way.",
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
	title: "Welcome to our Telemedicine App!",
	text: "Providing convenient and accessible medical consultations from the comfort of your own home.",
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
	title:
		"Take control of your well-being and experience the future of medical care with us.",
	text: "Whether you need a routine check-up, have a specific health concern, or require follow-up care, our Telemedicine App is here to simplify your healthcare journey.",
	servicesList: services,
};
