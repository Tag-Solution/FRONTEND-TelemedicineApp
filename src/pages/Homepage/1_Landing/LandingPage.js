import React from "react";
import { Wrapper } from "./LandingPage.styles";

import { landingPage } from "../../../utils/temp/website_texts";

const LandingPage = () => {
	return (
		<Wrapper className="section">
			{/* Image */}
			<div className="img-container">
				<div className="homepage-bg-overlay"></div>
				<img
					className="homepage-bg"
					src={landingPage.images[0].imageUrl}
					alt={landingPage.images[0].alt}
				/>
			</div>
			<div className="homepage-bg-back"></div>
			{/* Text */}
			<div className="section-center">
				<div className="text-container">
					<h2>{landingPage.title}</h2>
					<p>{landingPage.text}</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default LandingPage;
