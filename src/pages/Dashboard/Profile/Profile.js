import React from "react";
import { Wrapper } from "./Profile.styles";

import { ProfileHeader, ProfileBio } from "../../../components/";

import { userEntity } from "../../../utils/temp/entities";
import { useUserContext } from "../../../context/UserContext";

const Profile = () => {
	const { userInContext } = useUserContext();

	// if loading, if error, then:
	return (
		<Wrapper>
			<div className="outlet-section">
				<ProfileHeader data={userEntity}></ProfileHeader>
				<hr />
				<ProfileBio data={userEntity}></ProfileBio>
				<hr style={{ width: "85%", margin: "0 auto" }} />
				<h2>{userInContext}</h2>
			</div>
		</Wrapper>
	);
};

export default Profile;
