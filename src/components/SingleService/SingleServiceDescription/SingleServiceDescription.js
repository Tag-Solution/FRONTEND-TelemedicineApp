import React from "react";
import styled from "styled-components";

const SingleServiceDescription = ({ title, description, action }) => {
	return (
		<Wrapper onClick={action}>
			<div className="title-container">
				<span>IC</span>
				<h2>{title}</h2>
			</div>
			<p>{description}</p>
		</Wrapper>
	);
};

export const Wrapper = styled.article`
	background: var(--ColorPrimary-4);
	width: 87%;
	border-radius: 0.5rem;
	margin: 0 auto;
	padding: 1.5rem 1.5rem;
	.title-container {
		display: flex;
		align-items: baseline;
		justify-content: baseline;
		margin-bottom: 0.5rem;
		span {
			color: red;
			font-size: 1rem;
			margin-right: 0.5rem;
		}
		h2 {
			font-family: var(--FontWork);
			color: var(--ColorBlack);
			font-size: 1rem;
			font-weight: 400;
			letter-spacing: 1px;
		}
	}
	p {
		font-family: var(--FontWork);
		color: var(--ColorBlack-2);
		font-size: 1.05rem;
		font-weight: 300;
		letter-spacing: 0.7px;
	}
`;

export default SingleServiceDescription;
