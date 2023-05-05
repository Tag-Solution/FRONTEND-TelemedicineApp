import React from "react";
import styled from "styled-components";

import placeholder from "../../../assets/static/No-Image-Placeholder.svg.png";

const ImagePlaceholder = () => {
	return (
		<Wrapper>
			<img src={placeholder} alt="Placeholder" />
		</Wrapper>
	);
};
export const Wrapper = styled.article`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export default ImagePlaceholder;
