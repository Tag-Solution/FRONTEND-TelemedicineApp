import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Wrapper from "./RegisterForm.styles";

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
					photo:
						"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F08%2Fsimp_homersingle08_f_hires2-2000.jpg",
					roleId: 1,
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
					registerUser(values)
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
						{/* Email */}
						<div className="single-input">
							<label htmlFor="email">Email</label>
							<Field name="email" placeholder="E-mail" />
							<ErrorMessage name="email" component="div" />
						</div>

						{/* Password */}
						<div className="single-input">
							<label htmlFor="password">Contraseña</label>
							<Field name="password" />
						</div>
					</div>

					<div className="input-block">
						{/* First_Name */}
						<div className="single-input">
							<label htmlFor="firstName">Nombre</label>
							<Field name="firstName" placeholder="First Name" />
							<ErrorMessage name="firstName" component="div" />
						</div>

						{/* Last_Name */}
						<div className="single-input">
							<label htmlFor="lastName">Apellido</label>
							<Field name="lastName" placeholder="Ej: Fulanito" />
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
