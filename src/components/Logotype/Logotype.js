import React from "react";
import { Link } from "react-router-dom";

import LogoContainer from "./Logotype.styles";

const Logotype = () => {
	return (
		<LogoContainer>
			<Link to="/">
				<h1>
					<span>Tele</span> Med
				</h1>
			</Link>
		</LogoContainer>
	);
};

export default Logotype;
