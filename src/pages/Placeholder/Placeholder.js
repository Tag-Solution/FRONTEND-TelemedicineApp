import React from "react";
import styled from "styled-components";

const Placeholder = ({ text }) => {
	return (
		<Wrapper>
			<h2>{text}</h2>
		</Wrapper>
	);
};

export const Wrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;
	background: var(--ColorPrimary-5);
	font-size: 2rem;
	color: var(--ColorBlack-3);
	font-weight: 300;
	letter-spacing: 0.4rem;
`;

export default Placeholder;
