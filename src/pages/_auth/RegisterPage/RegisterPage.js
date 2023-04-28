import React from "react";

import Wrapper from "./RegisterPage.styles";

import { RegisterForm } from "../../../components";

const RegisterPage = () => {
	return (
		<Wrapper className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<h2>Registro</h2>
				</div>
			</div>
			<RegisterForm></RegisterForm>
		</Wrapper>
	);
};

export default RegisterPage;
