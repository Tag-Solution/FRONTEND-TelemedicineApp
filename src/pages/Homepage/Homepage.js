import React from "react";

import { Wrapper } from "./Homepage.styles";

import LandingPage from "./1_Landing/LandingPage";
import Placeholder from "./2_Placeholder/Placeholder";

const Homepage = () => {
	return (
		<Wrapper>
			<LandingPage></LandingPage>
			<Placeholder></Placeholder>
		</Wrapper>
	);
};

export default Homepage;
