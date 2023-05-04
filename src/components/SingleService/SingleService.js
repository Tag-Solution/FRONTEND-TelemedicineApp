import React from "react";
import { Wrapper } from "./SingleService.styles";

import { filterIsSelected } from "../../utils/array_utils";

import { ContainerizedImage } from "../";

const SingleService = ({ title, description, images }) => {
	let image = filterIsSelected(images);
	return (
		<Wrapper>
			{/* Cuadradito de Mierda */}
			<div className="service-desc-container">
				<div className="title-container">
					<span>IC</span>
					<h2>{title}</h2>
				</div>
				<p>{description}</p>
			</div>
			{/* Imagen */}
			<div className="separator-2rem"></div>
			<div className="image-container">
				<ContainerizedImage className="img" image={image}></ContainerizedImage>
			</div>
		</Wrapper>
	);
};

export default SingleService;
