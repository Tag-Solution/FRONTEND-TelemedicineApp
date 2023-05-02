import React from "react";
import styled from "styled-components";

const FilterButton = ({ id, title, action }) => {
	return (
		<Wrapper id={id} onClick={action}>
			{title}
		</Wrapper>
	);
};

export const Wrapper = styled.button`
	padding: 0.7rem 0.9rem;
	/* Colors */
	outline: none;
	border: 1px solid transparent;
	border-radius: 2rem;
	background-color: var(--ColorPrimary-4);
	/* Font */
	font-family: var(--FontWork);
	color: var(--ColorBlack-2);
	font-size: 0.8rem;
	letter-spacing: 0.7px;
	cursor: pointer;
	transition: var(--TransitionMain);
	&:hover {
		background: var(--ColorPrimary-2);
		color: var(--ColorWhite);
	}
`;

export default FilterButton;
