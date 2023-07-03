import React from 'react';
import { CircleLoader } from "react-spinners";

function Spinner() {
	return (
		<div className="fixed top-[50%] mx-auto h-fit w-full">
			<CircleLoader color="#3fa76a" className="mx-auto"/>
		</div>
	);
}

export default Spinner;