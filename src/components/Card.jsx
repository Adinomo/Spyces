import React from "react";
import { useNavigate } from "react-router-dom"; 

function Cards({title, image, id, category}) {
	let navigate = useNavigate();
	return (
		<div className="card" >
			<div  className="card">
				<img
					src={image}
					className="card-image"
					onClick={() => {navigate(`/${id}`)}}
				/>
				<div className="py-4 px-3 w-full">
					<h2 className="cursor-pointer w-fit" onClick={() => {navigate(`/${id}`)}}>{title}</h2>
					<p className="card-text">{category}</p>
					<button
						className="card-button"
						onClick={() => {navigate(`/${id}`)}}>
						View recipe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
