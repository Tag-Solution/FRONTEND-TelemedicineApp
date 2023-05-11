import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./SharedLayout.styles";

import { DashboardNavigation } from "../../components";

const SharedLayout = () => {
	return (
		<Wrapper>
			<DashboardNavigation></DashboardNavigation>
			<div className="outlet-container">
				<Outlet></Outlet>
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
