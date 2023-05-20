import React from "react";
import { Wrapper } from "./ProfileHeader.styles";

import { getFullName } from "../../../../utils/string_utils";

import NoCover from "../../../../assets/static/Cover-Image-Placeholder.jpg";
import NoAvatar from "../../../../assets/static/Profile-Image-Placeholder.jpg";

const ProfileHeader = ({ data }) => {
	return (
		<Wrapper>
			<img src={NoCover} alt="cover" className="cover-image" />
			<div className="info">
				<img src={NoAvatar} alt="avatar" />
				<div className="text">
					<h2>{getFullName(data.firstName, data.lastName)}</h2>
					<p>{data.userProfile?.job}</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileHeader;
