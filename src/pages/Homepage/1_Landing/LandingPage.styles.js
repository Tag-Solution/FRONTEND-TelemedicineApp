import styled from "styled-components";

export const Wrapper = styled.section`
	min-height: 90vh;
	.img-container {
		z-index: 500;
		position: absolute;
		top: 0;
		right: 0;
		width: 75%;
		height: 67%;
		.homepage-bg {
			opacity: 0.9;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top right;
		}
		.homepage-bg-overlay {
			z-index: 501;
			width: 100%;
			height: 100%;
			background: rgba(95, 255, 255, 0.1);
			opacity: 0.7;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.homepage-bg-back {
		z-index: 400;
		opacity: 0.9;
		background-color: var(--ColorPrimary-3);
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
		bottom: 7%;
		left: 6%;
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
	@media screen and (min-width: 475px) {
		.text-container {
			bottom: 17%;
			left: 8%;
		}
	}
	@media screen and (min-width: 600px) {
		.text-container {
			bottom: 14%;
			left: 8%;
			h2 {
				width: 50%;
				font-size: 2.1rem;
			}
			p {
				width: 70%;
				font-size: 1.3rem;
			}
		}
	}
	@media screen and (min-width: 675px) {
		.img-container {
			width: 80%;
			.homepage-bg {
				object-position: top left;
			}
		}
	}
	@media screen and (min-width: 768px) {
		width: 100%;
		display: grid;
		place-items: center;
		position: relative;
		.img-container {
			width: 60%;
			height: 92%;
		}
		.homepage-bg-back {
			top: 0;
			width: 85%;
			height: 87%;
		}
		.text-container {
			position: relative;
			padding-bottom: 25%;
			margin-left: -4%;
			h2 {
				width: 60%;
				font-size: 2.5rem;
				letter-spacing: 0.3rem;
				margin-bottom: 1.5rem;
			}
			p {
				width: 62%;
				font-size: 1.3rem;
				letter-spacing: 1.7px;
				line-height: 1.6;
			}
		}
	}
	@media screen and (min-width: 980px) {
		min-height: 97vh;
		.img-container {
			height: 96%;
		}
		.homepage-bg-back {
			width: 80%;
			height: 90%;
		}
		.text-container {
			padding-bottom: 0;
			h2 {
				width: 55%;
				font-size: 2.8rem;
				margin-bottom: 1.8rem;
			}
			p {
				width: 50%;
				font-size: 1.5rem;
				line-height: 1.8;
			}
		}
	}
	@media screen and (min-width: 1150px) {
		.img-container {
			.homepage-bg {
				object-position: center center;
			}
		}
		.text-container {
			align-items: center;
			padding-bottom: 0;
			max-width: var(--WidthMax);
			h2 {
				width: 40%;
			}
			p {
				width: 40%;
			}
		}
	}
	@media screen and (min-width: 1850px) {
		.homepage-bg-back {
			width: 100%;
		}
	}
`;
