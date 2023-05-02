import React from "react";
import { Wrapper } from "./LandingPage.styles";

import HomepageBG from "../../../assets/temp/pexels-cedric-fauntleroy-4270088.jpg";

const LandingPage = () => {
	return (
		<Wrapper className="section">
			{/* Image */}
			<div className="img-container">
				<div className="homepage-bg-overlay"></div>
				<img className="homepage-bg" src={HomepageBG} alt="Homepage" />
			</div>
			<div className="homepage-bg-back"></div>
			{/* Text */}
			<div className="section-center">
				<div className="text-container">
					<h2>Lorem ipsum dolor sit.</h2>
					<p>
						Lorem ipsum dolor sit amet amet, adipisicing elit. Molestias
						deleniti repellendus illo libero corrupti ratione dolore tempora
						architecto?
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default LandingPage;
