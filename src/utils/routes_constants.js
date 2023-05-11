import { BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";

// Website Links:
export const links = [
	{
		id: 1,
		text: "Home",
		path: "/",
		icon: null,
	},
	{
		id: 2,
		text: "About Us",
		path: "/about",
		icon: null,
	},
	{
		id: 3,
		text: "Contact",
		path: "/contact",
		icon: null,
	},
	{
		id: 4,
		text: "Register",
		path: "/auth/register",
		icon: null,
	},
	{
		id: 5,
		text: "Login",
		path: "/auth/login",
		icon: null,
	},
];

// Dashboard Links:

export const dashboard_links = [
	{
		id: 1,
		text: "Profile",
		path: "/",
		icon: <BiUserCircle></BiUserCircle>,
	},
	{
		id: 2,
		text: "Contacts",
		path: "/app/contacts",
		icon: <IoMdContacts></IoMdContacts>,
	},
	{
		id: 3,
		text: "Calls",
		path: "/app/calls",
		icon: <BiPhoneCall></BiPhoneCall>,
	},
	{
		id: 4,
		text: "Settings",
		path: "/app/settings",
		icon: <AiOutlineSetting></AiOutlineSetting>,
	},
];

// All Routes:
export const routes = [
	{
		id: 1,
		path: "/",
		icon: null,
	},
	{
		id: 2,
		path: "/about",
		icon: null,
	},
	{
		id: 3,
		path: "/contact",
		icon: null,
	},
	{
		id: 4,
		path: "/auth/register",
		icon: null,
	},
	{
		id: 5,
		path: "/auth/login",
		icon: null,
	},
];
