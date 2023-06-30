import React, { useState, useEffect } from "react";
import Cards from "../components/card";
import Spinners from "../components/spinner";
import Navbar from "../components/Navbar";
import ReactPaginate from "react-paginate";

function Menu() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	let ids = "715539,71642,5000,700009,24006,300,6008,88000";

	console.log(data);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
			);
			if (!response.ok) {
				throw new Error("Data coud not be fetched!");
			} else {
				const data = await response.json();
				console.log(data);
				setData(data.meals);
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


	function handleSearch(e) {
		setQuery(e.target.value);
		fetchData();
	}
	const itemsPerPage = 8;
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = data.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`,
		);
		setItemOffset(newOffset);
	};

	const card = currentItems.map((item, index) => {
		return (
			<Cards
				key={index}
				title={item.strMeal}
				image={item.strMealThumb}
				id={item.idMeal}
				category={item.strCategory}
				items={data}
			/>
		);
	});

	return (
		<div>
			<Navbar
				onChange={(e) => handleSearch(e)}
				value={query}
			/>
			<div className="container-cards">
				<div className="container-flex">{!isLoading ? card : <Spinners />}</div>
			</div>
			<div className="paginate">
				{data.length > 8 ? (
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
						pageClassName={"item pagination-page "}
						previousLinkClassName="page-num"
						nextLinkClassName="page-num"
						containerClassName={"pagination"}
						activeClassName={"item active "}
					/>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Menu;
