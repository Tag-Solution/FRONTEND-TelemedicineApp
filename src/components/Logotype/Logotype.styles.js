import styled from "styled-components";

const LogoContainer = styled.nav`
	h1 {
		font-size: 1.9rem;
		letter-spacing: 1px;
		font-family: var(--FontWork);
		font-weight: 200;
		span {
			margin: 0rem -0.4rem;
			font-size: 1.8rem;
			color: crimson;
			font-family: var(--FontLora);
		}
	}
	@media (min-width: 720px) {
		h1 {
			font-size: 2.4rem;
		}
	}
	@media (min-width: 980px) {
		h1 {
			font-size: 2rem;
		}
	}
`;
export default LogoContainer;
