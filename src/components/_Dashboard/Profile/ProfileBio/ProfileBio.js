import React from "react";
import { Wrapper } from "./ProfileBio.styles";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaMobileAlt } from "react-icons/fa";

const ProfileBio = ({ data }) => {
	return (
		<Wrapper>
			<h3>{data.userProfile?.description}</h3>
			<div className="items-container">
				<div className="single-item">
					<span>
						<AiOutlineMail></AiOutlineMail>
					</span>
					<h2>{data.email}</h2>
				</div>
				<div className="single-item">
					<span>
						<GoLocation></GoLocation>
					</span>
					<h2>{data.userProfile?.location}</h2>
				</div>
				<div className="single-item">
					<span>
						<FaMobileAlt></FaMobileAlt>
					</span>
					<h2>{data.userProfile?.mobile}</h2>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileBio;
