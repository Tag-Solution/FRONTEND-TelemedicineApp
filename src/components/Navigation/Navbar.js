import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { links } from "../../utils/routes_constants";
import { useNavigationContext } from "../../context/NavigationContext";

import { Logotype } from "../";

const Nav = () => {
	const { openSidebar } = useNavigationContext();
	return (
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<Logotype></Logotype>
					<button className="nav-toggle" type="button" onClick={openSidebar}>
						<AiOutlineMenu></AiOutlineMenu>
					</button>
				</div>
				<ul className="nav-links">
					{links.map((singleLink) => {
						const { id, text, path } = singleLink;
						return (
							<li key={id}>
								<Link to={path}>{text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	position: relative;
	z-index: 800;
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, white 50%, transparent);
	color: var(--ColorBlack);
	.nav-center {
		width: 90%;
		margin: 0 auto;
		max-width: var(--WidthMax);
	}
	.nav-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		max-width: var(--WidthMax);
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--ColorBlack);
		cursor: pointer;
		svg {
			font-size: 1.5rem;
		}
	}
	.nav-links {
		display: none;
	}
	.userBtnsContainer {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.nav-toggle {
			svg {
				font-size: 1.8rem;
			}
		}
	}
	@media screen and (min-width: 980px) {
		position: absolute;
		top: 0;
		transition: var(--TransitionMain);
		.nav-toggle {
			display: none;
		}
		.nav-center {
			width: 90%;
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: end;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--ColorBlack-2);
				font-family: var(--FontWork);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: 0.5px;
				padding: 0.5rem;
				border-bottom: 1px solid transparent;
				transition: var(--TransitionMain);
				&:hover {
					border-bottom: 1px solid var(--ColorPrimary);
					color: var(--ColorPrimary);
					opacity: 1;
				}
			}
		}
	}
	@media (min-width: 1150px) {
		.nav-links {
			li {
				margin: 0 1.7rem;
			}
		}
	}
`;

export default Nav;
