import styled from "styled-components";

export const Wrapper = styled.article`
	width: 90%;
	margin: 0 auto;
	padding-bottom: 2rem;
	.btn-container {
		width: 97%;
		margin: 0 auto;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 1rem;
	}
`;
