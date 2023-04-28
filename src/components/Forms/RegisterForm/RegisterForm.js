import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import Wrapper from "./RegisterForm.styles";

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			age: 0,
			dni: "",
			country: "",
			province: "",
			city: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	let navigate = useNavigate();

	return (
		<Wrapper className="form-container">
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
							type="text"
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
							name="first_name"
							placeholder="Ej: Cosme"
							id="first_name"
							onChange={formik.handleChange}
							value={formik.values.first_name}
						/>
					</div>
					{/* Last_Name */}
					<div className="single-input">
						<label htmlFor="last_name">Apellido</label>
						<input
							type="text"
							name="last_name"
							placeholder="Ej: Fulanito"
							id="last_name"
							onChange={formik.handleChange}
							value={formik.values.last_name}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="dni">DNI</label>
						<input
							type="text"
							name="dni"
							placeholder="Ej: 35000000"
							id="dni"
							onChange={formik.handleChange}
							value={formik.values.dni}
						/>
					</div>
					{/* Age */}
					<div className="single-input">
						<label htmlFor="dni">Edad</label>
						<input
							type="number"
							name="age"
							placeholder="Ej: 38"
							id="age"
							onChange={formik.handleChange}
							value={formik.values.age}
						/>
					</div>
				</div>
				{/* === COORDONEES === */}
				<div className="input-block">
					{/* Country */}
					<div className="single-input">
						<label htmlFor="country">Pais</label>
						<input
							type="text"
							name="country"
							placeholder="Ej: Argentina"
							id="country"
							onChange={formik.handleChange}
							value={formik.values.country}
						/>
					</div>
					{/* Province */}
					<div className="single-input">
						<label htmlFor="province">Provincia</label>
						<input
							type="text"
							name="province"
							placeholder="Ej: Buenos Aires"
							id="province"
							onChange={formik.handleChange}
							value={formik.values.province}
						/>
					</div>
					{/* City */}
					<div className="single-input">
						<label htmlFor="city">Ciudad</label>
						<input
							type="text"
							name="city"
							placeholder="Ej: Olivos"
							id="city"
							onChange={formik.handleChange}
							value={formik.values.city}
						/>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</Wrapper>
	);
};

export default RegisterForm;
