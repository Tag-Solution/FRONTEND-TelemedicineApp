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
		transition: var(--TransitionMain);
		a {
			margin-top: 0.45rem;
			font-size: 1.6rem;
			color: var(--ColorPrimary);
			cursor: pointer;
		}
		span {
			font-size: 1.3rem !important;
			color: var(--ColorCrimson);
			cursor: pointer;
		}
	}

	@media screen and (min-width: 980px) {
		width: 12rem;
		height: 100%;
		top: 0;
		right: 0;
		.nav-links {
			width: 70%;
			padding-top: 3rem;
			flex-direction: column;
			justify-content: unset;
			align-items: start;

			a {
				margin-top: 2rem;
				font-family: var(--FontLora);
				font-weight: 300;
				font-size: 1.1rem;
				letter-spacing: 0.17rem;
				color: var(--ColorBlack-3);
			}
			* {
				margin-top: 2rem;
			}
		}
	}
`;
