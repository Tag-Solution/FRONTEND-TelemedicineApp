import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./SharedLayout.styles";

import { DashboardNavigation, useWindowDimensions } from "../../components";

const SharedLayout = () => {
	const { height } = useWindowDimensions();

	return (
		<Wrapper style={{ height: `${height}px` }}>
			<DashboardNavigation></DashboardNavigation>
			<div
				className="outlet-container"
				style={{
					height: `calc(${height}px - 4rem)`,
				}}
			>
				<Outlet></Outlet>
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
