import React, { useEffect } from "react";
import axios from "axios";

import { Wrapper } from "./Profile.styles";
import { ProfileHeader, ProfileBio } from "../../../components/";
import { userEntity } from "../../../utils/temp/entities";
import { API_TEST_GET } from "../../../utils/api_constants";
import setAuthHeader from "../../../services/axios/config/auth-header";

const Profile = () => {
	useEffect(() => {
		axios
			.get(API_TEST_GET, setAuthHeader())
			.then((res) => console.log(res.data))
			.catch((e) => console.log(e));
	}, []);
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
