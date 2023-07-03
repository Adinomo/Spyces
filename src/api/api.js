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


