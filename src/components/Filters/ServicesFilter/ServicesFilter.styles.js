import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;
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
	@media screen and (min-width: 475px) {
		width: 75%;
	}
	@media screen and (min-width: 600px) {
		width: 65%;
		padding-bottom: 3.2rem;
		.btn-container {
			row-gap: 2rem;
		}
	}
	@media screen and (min-width: 675px) {
		width: 80%;
		.btn-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	@media screen and (min-width: 768px) {
		width: 78%;
		.btn-container {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	@media screen and (min-width: 980px) {
		display: none;
	}
`;
