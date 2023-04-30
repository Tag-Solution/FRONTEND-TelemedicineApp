import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Wrapper from "./LoginForm.styles";
import { loginUser } from "../../../services/auth_service";

const LoginForm = () => {
	return (
		<Wrapper className="form-container">
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				validationSchema={Yup.object({
					username: Yup.string()
						.email("Invalid email address")
						.required("Required"),
				})}
				onSubmit={(values) => {
					loginUser(values)
						.then((response) => {
							let res = response.data;
							alert("JWT Recibida: " + res.jwt);
						})
						.catch((error) => {
							console.log(error);
						});
				}}
			>
				<Form className="main-form">
					<div className="input-block">
						{/* Username */}
						<div className="single-input">
							<label htmlFor="username">Username</label>
							<Field name="username" placeholder="E-mail" />
							<ErrorMessage name="username" component="div" />
						</div>

						{/* Password */}
						<div className="single-input">
							<label htmlFor="password">Contraseña</label>
							<Field name="password" />
						</div>
					</div>
					<button type="submit" className="btn-fill-primary margin-top-1p5rem">
						Submit
					</button>
				</Form>
			</Formik>
		</Wrapper>
	);
};

export default LoginForm;
