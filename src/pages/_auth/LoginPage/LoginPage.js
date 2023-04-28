import React from "react";

import Wrapper from "./LoginPage.styles";

import { LoginForm } from "../../../components";

const LoginPage = () => {
	return (
		<Wrapper className="omit-nav">
			LoginPage
			<LoginForm></LoginForm>
		</Wrapper>
	);
};

export default LoginPage;
