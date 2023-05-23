import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Field } from "formik";

const PasswordInput = ({ isDisabled }) => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	return (
		<Wrapper className="single-input">
			<label htmlFor="password">Contraseña</label>
			<div className="input-container">
				<Field
					name="password"
					type={show ? "text" : "password"}
					disabled={isDisabled}
				/>
				<span onClick={() => toggleShow()}>
					{show ? (
						<AiOutlineEyeInvisible></AiOutlineEyeInvisible>
					) : (
						<AiOutlineEye></AiOutlineEye>
					)}
				</span>
			</div>
		</Wrapper>
	);
};
export const Wrapper = styled.div`
	.input-container {
		width: 100%;
		position: relative;
		input {
			width: 100%;
		}
		span {
			position: absolute;
			right: 0;
			top: 0;
			padding: 0rem 0.9rem;
			height: 100%;
			display: grid;
			place-items: center;
			background: var(--ColorWhite-2);
			border: 1px solid var(--ColorWhite-5);
			border-top-right-radius: 0.3rem;
			border-bottom-right-radius: 0.3rem;
			transition: var(--TransitionMain);
			cursor: pointer;
			* {
				font-size: 1.2rem;
				color: var(--ColorCrimson);
			}
		}
	}
`;

export default PasswordInput;
