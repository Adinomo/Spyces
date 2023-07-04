import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinners from "../components/Spinner";
import Navbar from "../components/Navbar";
import { fetchDetails } from "../api/api";

function RecipeDetails() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const recipeId = useParams().id;

	useEffect(() => {
		fetchDetails(recipeId, setIsLoading, setData);
	}, []);

	const { strMeal, strInstructions, strMealThumb } = data;

	const ingredients = [];
	const measure = [];
	for (let i = 1; i < 21; i++) {
		ingredients.push(data["strIngredient" + i]);
		measure.push(data["strMeasure" + i]);
	}
	console.log(ingredients);
	console.log(measure);

	const recipe = (
		<div className="details">
			<div className="flex px-5 w-full">
				<img
					src={strMealThumb}
					className="details-image"
				/>
			</div>
			<div className="details-info">
				<h2 className="font-semibold text-lg">{strMeal}</h2>
				<h4>{strInstructions ? "Instructions:" : ""}</h4>
				<p className="text-sm text-justify mb-4">{strInstructions}</p>
				<h4>{ingredients ? "Ingredients:" : ""}</h4>
				<div className="grid grid-cols-2">
					{ingredients.map((items, index) => {
						return (
							<div className="p-1 text-sm">
								<span className="font-semibold">{measure[index]}</span> {items}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);

	return (
		<div>
			<Navbar />
			<div>{isLoading ? <Spinners /> : recipe}</div>
		</div>
	);
}

export default RecipeDetails;
