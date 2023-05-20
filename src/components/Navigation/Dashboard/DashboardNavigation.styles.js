import styled from "styled-components";

export const Wrapper = styled.aside`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	height: 4rem;
	background: var(--ColorDashboard-Black);
	box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.05);
	.nav-links {
		width: 90%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		a {
			margin-top: 0.45rem;
			font-size: 1.8rem;
			color: var(--ColorDashboard-Grey);
			cursor: pointer;
			transition: var(--TransitionMain);
		}
		span {
			font-size: 1.2rem;
			letter-spacing: 1.3px;
			color: var(--ColorDashboard-Grey);
			cursor: pointer;
			transition: var(--TransitionMain);
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
				margin-top: 3rem;
				font-family: var(--FontWork);
				font-weight: 200;
				font-size: 1.1rem;
				letter-spacing: 0.2rem;
				color: var(--ColorWhite-5);
				&:hover {
					color: var(--ColorPrimary);
				}
			}
			span {
				margin-top: 3rem;
				font-family: var(--FontWork);
				font-weight: 300;
				letter-spacing: 0.15rem;
				color: var(--ColorWhite-2);
				&:hover {
					color: var(--ColorPrimary);
				}
			}
		}
	}
`;
