import React from "react";
import { Wrapper } from "./ServicesPage.styles";

import { servicesPage } from "../../../utils/temp/website_texts";
import { SingleService, ServicesFilter } from "../../../components";
import { hasItems } from "../../../utils/array_utils";

const ServicesPage = () => {
	let renderArray = hasItems(servicesPage.servicesList);

	return (
		<Wrapper className="section">
			<div className="section-center">
				<div className="section-title">
					<h2>{servicesPage.title}</h2>
					<p>{servicesPage.text}</p>
				</div>
			</div>
			{renderArray && (
				<ServicesFilter services={servicesPage.servicesList}></ServicesFilter>
			)}
			{renderArray ? (
				servicesPage.servicesList.map((serv) => {
					return <SingleService service={serv} key={serv.id}></SingleService>;
				})
			) : (
				<h3>No hay services</h3>
			)}
		</Wrapper>
	);
};

export default ServicesPage;
