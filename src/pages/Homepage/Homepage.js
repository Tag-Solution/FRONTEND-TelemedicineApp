import React from "react";
import { Wrapper } from "./Homepage.styles";

import HomepageBG from "../../assets/temp/pexels-rfstudio-3825539.jpg";

const Homepage = () => {
	return (
		<Wrapper className="section">
			{/* Image */}
			<img className="homepage-bg" src={HomepageBG} alt="Homepage" />
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

export default Homepage;
