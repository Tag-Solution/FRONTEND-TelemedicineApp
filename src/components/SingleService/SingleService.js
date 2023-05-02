import React from "react";
import { Wrapper } from "./SingleService.styles";

const SingleService = ({ id, title, description, images }) => {
	return (
		<Wrapper>
			{/* Cuadradito de Mierda */}
			<div className="service-desc-container">
				<div className="title-container">
					<span>IC</span>
					<h2>{title}</h2>
				</div>
				<p>{description}</p>
			</div>
			{/* Imagen */}
		</Wrapper>
	);
};

export default SingleService;
