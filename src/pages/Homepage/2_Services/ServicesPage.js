import React, { useState } from "react";
import { Wrapper } from "./ServicesPage.styles";

import { servicesPage } from "../../../utils/temp/website_texts";
import { SingleService, ServicesFilter } from "../../../components";
import { hasItems } from "../../../utils/array_utils";

const ServicesPage = () => {
	const [selectedItem, setSelectedItem] = useState(1);

	let renderArray = hasItems(servicesPage.servicesList);

	function handleSelection(e) {
		setSelectedItem(e.target.id);
	}

	function renderSelectedItem(selectedItem) {
		let myArray = servicesPage.servicesList;
		let selection = myArray.find((item) => {
			return item.id == selectedItem;
		});
		return <SingleService {...selection}></SingleService>;
	}

	return (
		<Wrapper className="section">
			<div className="section-center">
				<div className="section-title">
					<h2>{servicesPage.title}</h2>
					<p>{servicesPage.text}</p>
				</div>
			</div>
			{renderArray && (
				<ServicesFilter
					handleSelection={handleSelection}
					services={servicesPage.servicesList}
				></ServicesFilter>
			)}
			{renderSelectedItem(selectedItem)}
		</Wrapper>
	);
};

export default ServicesPage;
