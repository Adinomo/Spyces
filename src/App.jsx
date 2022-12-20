import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import RecipeDetails from "./pages/recipeDetails";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index  
					element={<Menu />}
				/>
				<Route
						path="/:id"
						element={<RecipeDetails/>}
					/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
