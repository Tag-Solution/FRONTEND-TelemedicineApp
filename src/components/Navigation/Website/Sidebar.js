import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { useNavigationContext } from "../../../context/NavigationContext";
import { links } from "../../../utils/routes_constants";

import { Logotype } from "../..";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useNavigationContext();

	return (
		<SidebarContainer>
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
			>
				<div className="sidebar-header">
					<Logotype></Logotype>
					<button className="close-btn" type="button" onClick={closeSidebar}>
						<FaTimes></FaTimes>
					</button>
				</div>
				<ul className="links">
					{links.map((singleLink) => {
						const { id, text, path } = singleLink;
						return (
							<li key={id}>
								<Link to={path} onClick={closeSidebar}>
									{text}
								</Link>
							</li>
						);
					})}
				</ul>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	text-align: center;
	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 87%;
		margin: 0 auto;
		height: 5rem;
	}
	.close-btn {
		margin-top: 0.2rem;
		font-size: 1.7rem;
		background: transparent;
		border-color: transparent;
		color: var(--ColorBlack-2);
		transition: var(--TransitionFast);
		cursor: pointer;
	}
	.close-btn:hover {
		color: var(--ColorPrimary);
	}
	.links {
		margin-bottom: 2.5rem;
	}
	.links a {
		display: block;
		padding: 1rem 2.5rem;
		font-family: var(--FontWork);
		color: var(--ColorBlack-2);
		text-transform: capitalize;
		font-size: 1.1rem;
		text-align: left;
		letter-spacing: 0.4px;
		transition: var(--TransitionMain);
	}
	.links a:hover {
		padding: 1rem 1.5rem;
		padding-left: 3rem;
		background: var(--ColorPrimary-3);
		color: var(--ColorWhite);
	}
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--ColorWhite);
		transition: var(--TransitionMain);
		transform: translate(-100%);
		z-index: -1;
	}
	.show-sidebar {
		transform: translate(0);
		z-index: 999;
	}
	.userBtnsContainer {
		margin: 2rem auto;
	}
	@media (min-width: 720px) {
		.sidebar-header {
			height: 8rem;
		}
		.close-btn {
			font-size: 2.2rem;
		}
		.links a {
			padding: 1.5rem 2.5rem;
			font-size: 1.8rem;
			padding-left: 3.5rem;
		}
		.links a:hover {
			padding: 1.5rem 2.5rem;
			padding-left: 4rem;
		}
	}
	@media (min-width: 980px) {
		.sidebar {
			display: none;
		}
	}
`;

export default Sidebar;
