import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./SharedLayout.styles";

import { DashboardNavigation, useWindowDimensions } from "../../components";

const SharedLayout = () => {
	const { width, height } = useWindowDimensions();

	const isMobile = width < 980;

	return (
		<Wrapper style={{ height: `${height}px` }}>
			<DashboardNavigation
				isMobile={isMobile ? true : false}
			></DashboardNavigation>
			<div
				className="outlet-container"
				style={{
					height: `${isMobile ? `calc(${height}px - 4rem)` : "100vh"}`,
					paddingLeft: `${isMobile ? "0" : "12rem"}`,
				}}
			>
				<Outlet></Outlet>
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
