import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./SharedLayout.styles";

import { DashboardNavigation, useWindowDimensions } from "../../components";

const SharedLayout = () => {
	const { height } = useWindowDimensions();
	console.log("====================================");
	console.log(height);
	console.log("====================================");
	return (
		<Wrapper>
			<DashboardNavigation></DashboardNavigation>
			<div
				className="outlet-container"
				style={{
					height: `calc(${height} - 4rem)`,
				}}
			>
				<Outlet></Outlet>
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
