import axios from "axios";

export const fetchData = async (endpoint, query, setIsLoading, setData) => {
	try {
		setIsLoading(true);
		const response = await fetch(endpoint + query);
		if (!response.ok) {
			throw new Error("Data coud not be fetched!");
		} else {
			const data = await response.json();
			setData(data.meals);
		}
	} catch (error) {
		console.log(error);
	} finally {
		setIsLoading(false);
	}
};

export const fetchDetails = async (recipeId, setIsLoading, setData) => {
	try {
		setIsLoading(true);
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
		);
		if (!response.ok) {
			throw new Error("Data coud not be fetched!");
		} else {
			const data = await response.json();
			setData(data.meals[0]);
		}
	} catch (error) {
		console.log(error);
	} finally {
		setIsLoading(false);
	}
};

