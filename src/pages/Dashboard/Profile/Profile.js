import React from "react";
import { Wrapper } from "./Profile.styles";

import { ProfileHeader, ProfileBio } from "../../../components/";

import { userEntity } from "../../../utils/temp/entities";

const Profile = () => {
	return (
		<Wrapper>
			<div className="outlet-section">
				<ProfileHeader data={userEntity}></ProfileHeader>
				<ProfileBio data={userEntity}></ProfileBio>
			</div>
		</Wrapper>
	);
};

export default Profile;
