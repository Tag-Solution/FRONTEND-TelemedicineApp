import React from "react";
import styled from "styled-components";

const Placeholder = () => {
	return <Wrapper>Placeholder</Wrapper>;
};

export const Wrapper = styled.section`
	background: var(--ColorPrimary-5);
	height: 80vh;
	width: 100%;
	font-size: 2rem;
	letter-spacing: 2px;
	display: grid;
	place-items: center;
`;

export default Placeholder;
