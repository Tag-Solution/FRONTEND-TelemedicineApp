import React from "react";
import { useFormik } from "formik";

import Wrapper from "./RegisterForm.styles";

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			roleId: 1,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Wrapper>
			<form onSubmit={formik.handleSubmit} className="register-form">
				<div className="input-block">
					{/* Email */}
					<div className="single-input">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							placeholder="E-mail"
							id="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
					</div>
					{/* Password */}
					<div className="single-input">
						<label htmlFor="password">Contraseña</label>
						<input
							type="password"
							name="password"
							placeholder="Ingrese su contraseña"
							id="password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</div>
				</div>
				{/* === PERSONA === */}
				<div className="input-block">
					{/* First_Name */}
					<div className="single-input">
						<label htmlFor="firstName">Nombre</label>
						<input
							type="text"
							name="firstName"
							placeholder="Ej: Cosme"
							id="firstName"
							onChange={formik.handleChange}
							value={formik.values.firstName}
						/>
					</div>
					{/* Last_Name */}
					<div className="single-input">
						<label htmlFor="lastName">Apellido</label>
						<input
							type="text"
							name="lastName"
							placeholder="Ej: Fulanito"
							id="lastName"
							onChange={formik.handleChange}
							value={formik.values.lastName}
						/>
					</div>
				</div>
				<button type="submit" className="btn-white">
					Submit
				</button>
			</form>
		</Wrapper>
	);
};

export default RegisterForm;
