import styled from "styled-components";

export const Wrapper = styled.article`
	padding-bottom: 1.5rem;
	.cover-image {
		width: 100%;
		height: 25vh;
		object-fit: cover;
	}
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -7.5vh;
		img {
			width: 5.7rem;
			border-radius: 50%;
			border: 5px solid var(--ColorWhite-2);
		}
		.text {
			text-align: center;
			margin-top: 0.3rem;
			h2 {
				font-family: var(--FontLora);
				font-size: 1.1rem;
				letter-spacing: 0.06rem;
				font-weight: 500;
				margin-bottom: 0.5rem;
			}
			p {
				font-family: var(--FontLora);
				color: var(--ColorBlack-2);
				font-size: 0.9rem;
				letter-spacing: 0.03rem;
			}
		}
	}
`;
