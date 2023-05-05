import styled from "styled-components";

export const Wrapper = styled.section`
	background: var(--ColorWhite-2);
	@media screen and (min-width: 980px) {
		.main-container {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			margin-top: 4rem;
			display: grid;
			gap: 4rem;
			grid-template-columns: 1fr 1fr;
			.services-container {
				display: flex;
				flex-direction: column;
				> * {
					margin: 1rem;
					cursor: pointer;
					transition: var(--TransitionMain);
					p {
						font-size: 0.9rem;
					}
				}
			}
			.image-container {
				width: 100%;
				height: 45rem;
			}
		}
	}
	@media screen and (min-width: 1150px) {
		.main-container {
			width: 85%;
		}
	}
`;
