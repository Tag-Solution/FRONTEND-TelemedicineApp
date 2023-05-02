import React from "react";
import { Wrapper } from "./ServicesFilter.styles";
import { FilterButton } from "../../";

const ServicesFilter = ({ services, handleSelection }) => {
	return (
		<Wrapper>
			<div className="btn-container">
				{services.map((singleService) => {
					return (
						<FilterButton
							id={singleService.id}
							key={singleService.id}
							title={singleService.title}
							action={handleSelection}
						></FilterButton>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default ServicesFilter;
