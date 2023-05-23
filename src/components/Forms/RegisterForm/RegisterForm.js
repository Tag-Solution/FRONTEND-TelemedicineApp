import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Wrapper from "./RegisterForm.styles";

import { PasswordInput } from "../";
import { useAuthenticationContext } from "../../../context/AuthenticationContext";

const RegisterForm = () => {
	const { isAuthenticating, registerUser } = useAuthenticationContext();
	return (
		<Wrapper className="form-container">
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					roleId: 2,
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required("Required"),
					lastName: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required("Required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
				})}
				onSubmit={(values) => {
					registerUser(values);
				}}
			>
				<Form className="main-form">
					<div className="input-block">
						{/* Email */}
						<div className="single-input">
							<label htmlFor="email">Email</label>
							<Field
								name="email"
								placeholder="E-mail"
								disabled={isAuthenticating}
							/>
							<ErrorMessage name="email" component="div" />
						</div>

						{/* Password */}
						<PasswordInput isDisabled={isAuthenticating}></PasswordInput>
					</div>

					<div className="input-block">
						{/* First_Name */}
						<div className="single-input">
							<label htmlFor="firstName">Nombre</label>
							<Field
								name="firstName"
								placeholder="First Name"
								disabled={isAuthenticating}
							/>
							<ErrorMessage name="firstName" component="div" />
						</div>

						{/* Last_Name */}
						<div className="single-input">
							<label htmlFor="lastName">Apellido</label>
							<Field
								name="lastName"
								placeholder="Ej: Fulanito"
								disabled={isAuthenticating}
							/>
							<ErrorMessage name="lastName" component="div" />
						</div>
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

export default RegisterForm;
