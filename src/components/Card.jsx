import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Cards({title, image, id, category}) {
	let navigate = useNavigate();

	function renderColor() {
		switch (category) {
			case "Vegetarian":
				return "bg-green-100";
			case "Pasta":
				return "bg-purple-200";
			case "Chicken":
				return "bg-blue-100";
			case "Beef":
				return "bg-blue-100";
			case "Dessert":
				return "bg-orange-200";
			case "Seafood":
				return "bg-red-100";
			case "Side":
				return "bg-yellow-100";
			default:
				return "";
		}
	}
	
	return (
		<div className="card">
			<div className="card">
				<img
					src={image}
					className="card-image"
					onClick={() => {
						navigate(`/${id}`);
					}}
				/>
				<div className="py-4 px-3 w-full">
					<h2
						className="cursor-pointer h-[23px] w-full text-ellipsis overflow-hidden truncate"
						onClick={() => {
							navigate(`/${id}`);
						}}>
						{title}
					</h2>
					<p
						className={`card-text ${renderColor()} `}
					>
						{category}</p>
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
