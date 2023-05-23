import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<div className="section-no-padding">
				<div className="section-center">
					<div className="footer-links-container">
						<div className="footer-links-section">
							<h2>Support</h2>
							<p>hola</p>
							<p>hola</p>
							<p>hola</p>
						</div>
						<div className="footer-links-section">
							<h2>Company</h2>
							<p>hola</p>
							<p>hola</p>
							<p>hola</p>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export const Wrapper = styled.aside`
	background: var(--ColorWhite-4);
	.section-no-padding {
		width: 100%;
		padding: 2rem 0rem;
		margin: 0 auto;
	}
	.footer-links-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.6rem;
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
				margin-top: 0.2rem;
				font-size: 1.1rem;
				text-transform: capitalize;
				letter-spacing: 0.02rem;
				font-family: var(--FontWork);
				font-weight: 200;
			}
		}
	}
`;

export default Footer;
