import styled from "styled-components";

export const Wrapper = styled.article`
	padding: 1.7rem;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	h3 {
		font-family: var(--FontLora);
		font-size: 0.85rem;
		letter-spacing: 1px;
		color: var(--ColorBlack-4);
		text-align: center;
	}
	.items-container {
		.single-item {
			display: flex;
			align-items: center;
			padding: 0.3rem 0rem;
			span {
				margin-top: 0.375rem;
				margin-right: 1rem;
				font-size: 1.3rem;
			}
			h2 {
				font-family: var(--FontLora);
				font-size: 1rem;
				letter-spacing: 2px;
			}
		}
	}
`;
