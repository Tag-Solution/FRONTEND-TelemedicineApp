import styled from "styled-components";

export const Wrapper = styled.section`
	background: var(--ColorWhite-2);
	@media screen and (min-width: 980px) {
		.main-container {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			display: grid;
			gap: 4rem;
			grid-template-columns: 1fr 1fr;
			.services-container {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				row-gap: 1rem;
				column-gap: 1rem;
				place-items: center;
				> * {
					cursor: pointer;
					transition: var(--TransitionMain);
					p {
						font-size: 0.9rem;
					}
				}
			}
			.image-container {
				width: 100%;
				height: 50rem;
			}
		}
	}
	@media screen and (min-width: 1150px) {
		.main-container {
			width: 85%;
		}
	}
`;
