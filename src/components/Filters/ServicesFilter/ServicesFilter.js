import React from "react";
import { Wrapper } from "./ServicesFilter.styles";
import { FilterButton } from "../../";

const ServicesFilter = ({ services }) => {
	return (
		<Wrapper>
			{services.map((singleService) => {
				return <FilterButton title={singleService.title}></FilterButton>;
			})}
		</Wrapper>
	);
};

export default ServicesFilter;
