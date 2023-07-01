import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import RecipeDetails from "./pages/recipeDetails";

function App() {
	return (
		<div className="font-primary">
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
		</div>
	);
}

export default App;
