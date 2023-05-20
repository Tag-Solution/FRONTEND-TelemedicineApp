import styled from "styled-components";

export const Wrapper = styled.article`
	.image-container {
		width: 90%;
		height: 60vh;
		margin: 0 auto;
		overflow: hidden;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1),
			0px -1px 15px rgba(0, 0, 0, 0.1);
		img {
			transition: var(--TransitionMain);
			&:hover {
				transform: scale(1.07);
			}
		}
	}
`;
