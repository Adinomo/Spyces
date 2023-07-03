import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinners from "../components/Spinner";
import Navbar from "../components/Navbar";

function RecipeDetails() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const recipeId = useParams().id;
	console.log(recipeId);
	console.log(data);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
			);
			if (!response.ok) {
				throw new Error("Data coud not be fetched!");
			} else {
				const data = await response.json();
				console.log(data);
				setData(data.meals[0]);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
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
		<div className="mt-5 container">
			<div className="row">
				<div className="col-md-6 d-flex justify-content-center align-items-center">
					<div className="img_container">
						<img
							src={strMealThumb}
							className="recipe_image"
						/>
					</div>
				</div>
				<div className="col-md-6 p-4">
					<h2>{strMeal}</h2>
					<h4>Instructions:</h4>
					<p className="ing">{strInstructions}</p>
					<h4>Ingredients:</h4>
					<div className="d-flex flex-wrap">
						{ingredients.map((items, index) => {
							return (
								<div
									className="p-1"
									style={{ width: "16rem" }}>
									{measure[index]} {items}
								</div>
							);
						})}
					</div>
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
