import React from "react";
import { Wrapper } from "./SingleService.styles";

import { filterIsSelected } from "../../../utils/array_utils";

import { ContainerizedImage } from "../../";
import SingleServiceDescription from "./SingleServiceDescription/SingleServiceDescription";

const SingleService = ({ title, description, images }) => {
	let image = filterIsSelected(images);
	return (
		<Wrapper>
			{/* Description */}
			<SingleServiceDescription
				title={title}
				description={description}
			></SingleServiceDescription>

			<div className="separator-2rem"></div>

			{/* Image */}
			<div className="image-container">
				<ContainerizedImage className="img" image={image}></ContainerizedImage>
			</div>
		</Wrapper>
	);
};

export default SingleService;
