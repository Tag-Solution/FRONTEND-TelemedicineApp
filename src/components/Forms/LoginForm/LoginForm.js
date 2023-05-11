import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Wrapper } from "./LoginForm.styles";

import { useAuthenticationContext } from "../../../context/AuthenticationContext";
import { ThreeDots } from "react-loader-spinner";
import PasswordInput from "../Inputs/PasswordInput/PasswordInput";

const LoginForm = () => {
	const { loginUser, isAuthenticating } = useAuthenticationContext();

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
					loginUser(values);
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
						<PasswordInput></PasswordInput>
					</div>
					<button
						type="submit"
						className={
							!isAuthenticating
								? "btn-fill-primary margin-top-1p5rem"
								: "btn-fill-primary-no-hover margin-top-1p5rem"
						}
					>
						{!isAuthenticating ? (
							"Submit"
						) : (
							<ThreeDots
								height="1rem"
								width="100%"
								radius="9"
								color="#ffffff"
								ariaLabel="three-dots-loading"
								wrapperStyle={{ padding: "0.2817rem 0rem" }}
								wrapperClassName=""
								visible={true}
							></ThreeDots>
						)}
					</button>
				</Form>
			</Formik>
		</Wrapper>
	);
};

export default LoginForm;
