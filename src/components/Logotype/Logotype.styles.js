import styled from "styled-components";

const LogoContainer = styled.nav`
	h1 {
		font-family: var(--FontWork);
		font-size: 1.9rem;
		font-weight: 200;
		letter-spacing: 1px;
		span {
			margin: 0rem -0.4rem;
			font-family: var(--FontLora);
			color: var(--ColorPrimary);
			font-size: 1.8rem;
			font-weight: 600;
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
