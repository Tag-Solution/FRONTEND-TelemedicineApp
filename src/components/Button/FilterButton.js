import React from "react";
import styled from "styled-components";

const FilterButton = ({ title, action }) => {
	return <Wrapper onClick={action}>{title}</Wrapper>;
};

export const Wrapper = styled.button`
	outline: none;
	border: none;
`;

export default FilterButton;
