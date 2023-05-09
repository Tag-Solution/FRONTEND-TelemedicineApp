import React, { useState, useEffect } from "react";
import { Wrapper } from "./ServicesPage.styles";

import { servicesPage } from "../../../utils/temp/website_texts";

import {
	ContainerizedImage,
	ServicesFilter,
	SingleService,
	SingleServiceDescription,
	useWindowDimensions,
} from "../../../components";
import { filterIsSelected } from "../../../utils/array_utils";

const ServicesPage = () => {
	const [itemsArray, setItemsArray] = useState(servicesPage.servicesList);
	const [selectedItem, setSelectedItem] = useState(1);
	const [selectedImage, setSelectedImage] = useState({});

	const { width } = useWindowDimensions();

	useEffect(() => {
		let starterImage = filterIsSelected(itemsArray[0].images);
		setSelectedImage(starterImage);
	}, [itemsArray]);

	function renderServices(selectedItem, isSingleService) {
		if (isSingleService) {
			let selection = itemsArray.find((item) => {
				return item.id == selectedItem;
			});
			return <SingleService {...selection}></SingleService>;
		} else {
			return itemsArray.map((item) => {
				let itemImage = filterIsSelected(item.images);
				return (
					<SingleServiceDescription
						key={item.id}
						title={item.title}
						description={item.description}
						action={() => handleImageSelection(itemImage)}
					></SingleServiceDescription>
				);
			});
		}
	}

	function handleSelection(e) {
		setSelectedItem(e.target.id);
	}

	function handleImageSelection(item) {
		setSelectedImage(item);
	}

	return (
		<Wrapper className="section">
			<div className="section-center">
				<div className="section-title">
					<h2>{servicesPage.title}</h2>
					<p>{servicesPage.text}</p>
				</div>

				{/* < 980x */}
				{itemsArray && width < 980 && (
					<React.Fragment>
						<ServicesFilter
							handleSelection={handleSelection}
							services={servicesPage.servicesList}
						></ServicesFilter>
						{renderServices(selectedItem, true)}
					</React.Fragment>
				)}

				{/* > 980px */}
				{itemsArray && width >= 980 && (
					<div className="main-container">
						<div className="services-container">
							{renderServices(selectedItem, false)}
						</div>
						<div className="image-container">
							<ContainerizedImage image={selectedImage} />
						</div>
					</div>
				)}
			</div>
		</Wrapper>
	);
};

export default ServicesPage;
