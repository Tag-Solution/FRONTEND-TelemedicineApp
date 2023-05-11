import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./DashboardNavigation.styles";

import { dashboard_links } from "../../../utils/routes_constants";
import { useAuthenticationContext } from "../../../context/AuthenticationContext";
const DashboardNavigation = () => {
	const navigate = useNavigate();
	const { logoutUser } = useAuthenticationContext();
	return (
		<Wrapper>
			<div className="nav-links">
				{dashboard_links.map((i) => {
					return (
						<Link key={i.id} to={i.path}>
							{i.icon}
						</Link>
					);
				})}
				<span
					onClick={() => {
						logoutUser();
						navigate(0);
					}}
				>
					Logout
				</span>
			</div>
		</Wrapper>
	);
};

export default DashboardNavigation;
