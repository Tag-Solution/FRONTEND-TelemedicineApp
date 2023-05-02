import styled from "styled-components";

export const Wrapper = styled.main`
	.homepage-bg {
		z-index: 500;
		opacity: 0.9;
		position: absolute;
		top: 0;
		right: 0;
		width: 75%;
		height: 65%;
		object-fit: cover;
		object-position: top right;
	}
	.homepage-bg-back {
		z-index: 400;
		opacity: 0.9;
		background-color: var(--ColorPrimary-4);
		width: 87%;
		height: 65%;
		position: absolute;
		top: 30%;
		right: 0%;
		display: block;
	}
	.text-container {
		z-index: 800;
		position: absolute;
		bottom: 4rem;
		left: 1.5rem;
		h2 {
			width: 70%;
			font-family: var(--FontLora);
			color: var(--ColorBlack);
			font-size: 1.9rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 2px;
			margin-bottom: 1rem;
		}
		p {
			width: 85%;
			font-family: var(--FontWork);
			color: var(--ColorBlack-2);
			font-size: 1rem;
			font-weight: 300;
			letter-spacing: 1.2px;
			line-height: 1.5;
		}
	}
`;
