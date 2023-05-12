import React from "react";
import { Wrapper } from "./Profile.styles";

import { ProfileHeader, ProfileBio } from "../../../components/";

import { userEntity } from "../../../utils/temp/entities";

const Profile = () => {
	return (
		<Wrapper>
			<div className="outlet-section">
				<ProfileHeader data={userEntity}></ProfileHeader>
				<hr />
				<ProfileBio data={userEntity}></ProfileBio>
				<hr style={{ width: "85%", margin: "0 auto" }} />
			</div>
		</Wrapper>
	);
};

export default Profile;
