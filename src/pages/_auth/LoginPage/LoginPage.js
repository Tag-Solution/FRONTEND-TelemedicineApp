import React from "react";

import Wrapper from "./LoginPage.styles";

import { LoginForm } from "../../../components";

const LoginPage = () => {
	return (
		<Wrapper className="section">
			<div className="section-center">
				<div className="section-title">
					<h2>Login</h2>
				</div>
			</div>
			<LoginForm></LoginForm>
		</Wrapper>
	);
};

export default LoginPage;
