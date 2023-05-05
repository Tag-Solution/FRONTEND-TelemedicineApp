import React from "react";
import styled from "styled-components";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const ContainerizedImage = ({ image }) => {
	return (
		<Wrapper>
			{image ? (
				<img className="selected-image" src={image.imageUrl} alt={image.alt} />
			) : (
				<ImagePlaceholder></ImagePlaceholder>
			)}
		</Wrapper>
	);
};

export const Wrapper = styled.article`
	width: 100%;
	height: 100%;
	.selected-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default ContainerizedImage;
