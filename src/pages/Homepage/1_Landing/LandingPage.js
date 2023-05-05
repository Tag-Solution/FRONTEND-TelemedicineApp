import React from "react";
import { Wrapper } from "./LandingPage.styles";

import { landingPage } from "../../../utils/temp/website_texts";

import { filterIsSelected } from "../../../utils/array_utils";

import { ContainerizedImage } from "../../../components";

const LandingPage = () => {
	let image = filterIsSelected(landingPage.images);
	return (
		<Wrapper className="section">
			{/* Image */}
			<div className="img-container">
				<div className="homepage-bg-overlay"></div>
				<ContainerizedImage image={image}></ContainerizedImage>
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
