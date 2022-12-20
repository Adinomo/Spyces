import React from 'react';
import { CircleLoader } from "react-spinners";

function Spinners() {
	return (
		<div className="d-flex justify-content-center align-items-center spin">
			<CircleLoader color="#3fa76a" />
		</div>
	);
}

export default Spinners;