import React from "react";

import { Wrapper } from "./Homepage.styles";

import LandingPage from "./1_Landing/LandingPage";
import Placeholder from "../../Placeholder/Placeholder";
import ServicesPage from "./2_Services/ServicesPage";

const Homepage = () => {
	return (
		<Wrapper>
			<LandingPage></LandingPage>
			<ServicesPage></ServicesPage>
			<Placeholder></Placeholder>
		</Wrapper>
	);
};

export default Homepage;
