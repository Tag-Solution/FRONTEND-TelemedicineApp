import React from "react";
import { useAuthenticationContext } from "../../context/AuthenticationContext";

const Dashboard = () => {
	const { logoutUser } = useAuthenticationContext();
	return (
		<div>
			<div className="section">
				<div className="section-center">
					<div className="section-title ">
						<h2
							className="btn-fill-primary-no-hover "
							onClick={() => logoutUser()}
						>
							Logout
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
