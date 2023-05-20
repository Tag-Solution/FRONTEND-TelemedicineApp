import styled from "styled-components";

export const Wrapper = styled.article`
	padding: 1.3rem 0rem;
	width: 85%;
	max-width: var(--WidthMax-SectionCenter);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	h3 {
		font-family: var(--FontLora);
		font-size: 0.8rem;
		letter-spacing: 1px;
		color: var(--ColorBlack-4);
		text-align: center;
	}
	.items-container {
		.single-item {
			display: flex;
			align-items: center;
			padding: 0.2rem 0rem;
			span {
				margin-top: 0.375rem;
				margin-right: 1rem;
				font-size: 1.1rem;
			}
			h2 {
				font-family: var(--FontLora);
				font-size: 0.9rem;
				letter-spacing: 2px;
			}
		}
	}
	@media screen and (min-width: 980px) {
		padding: 2rem 0rem;
		h3 {
			font-size: 0.9rem;
		}
	}
`;
