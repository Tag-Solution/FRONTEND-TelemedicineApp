import styled from "styled-components";

export const Wrapper = styled.aside`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	height: 4rem;
	background: var(--ColorWhite);
	box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.05);
	.nav-links {
		width: 90%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		cursor: pointer;
		transition: var(--TransitionMain);
	}
`;
