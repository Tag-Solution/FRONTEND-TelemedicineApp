import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Wrapper>
			<div className="section-no-padding">
				<div className="section-center">
					<div className="footer-links-container">
						<div className="footer-links-section">
							<h2>Support</h2>
							<p>
								<Link to="#">Coming soon...</Link>
							</p>
						</div>
						<div className="footer-links-section">
							<h2>Company</h2>
							<p>
								<Link to="/">Homepage</Link>
							</p>
							<p>
								<Link to="/about">About us</Link>
							</p>
							<p>
								<Link to="/contact">Contact</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="section-bottom">
				<h2>
					Proudly made by <span>TAG</span> Solutions.
				</h2>
				<p>&copy; 2023</p>
			</div>
		</Wrapper>
	);
};

export const Wrapper = styled.aside`
	background: var(--ColorWhite-4);
	.section-no-padding {
		width: 100%;
		padding: 4.5rem 0.4rem;
		margin: 0 auto;
		.footer-links-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 3rem;
			.footer-links-section {
				color: var(--ColorBlack-2);
				h2 {
					font-size: 1.1rem;
					text-transform: uppercase;
					letter-spacing: 0.02rem;
					font-family: var(--FontWork);
					font-weight: 400;
				}
				p {
					margin-top: 0.7rem;
					font-size: 0.97rem;
					text-transform: capitalize;
					letter-spacing: 0.1rem;
					font-family: var(--FontWork);
					font-weight: 300;
					cursor: pointer;
					transition: var(--TransitionFast);
					&:hover {
						color: var(--ColorPrimary);
					}
				}
			}
		}
	}
	.section-bottom {
		width: 100%;
		background: var(--ColorWhite-2);
		padding: 1rem 0rem;
		text-align: center;
		color: var(--ColorBlack-3);
		h2 {
			font-family: var(--FontLora);
			font-size: 0.75rem;
			font-weight: 200;
			letter-spacing: 0.2rem;
			span {
				color: var(--ColorCrimson);
				font-weight: 400;
			}
		}
		p {
			margin-top: 0.6rem;
			font-size: 0.87rem;
		}
	}
`;

export default Footer;
