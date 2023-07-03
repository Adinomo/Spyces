import React, { useState, useEffect } from "react";
import Cards from "../components/card";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import ReactPaginate from "react-paginate";
import { fetchData } from "../api/api"

function Menu() {
	const [query, setQuery] = useState("");
	const [endpoint, setEndpoint] = useState(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [itemOffset, setItemOffset] = useState(0);	

	useEffect(() => {
		fetchData(endpoint, query, setIsLoading, setData);
	}, []);

	function handleSearch() {
		fetchData(endpoint, query, setIsLoading, setData);
	}
	function handleOnChange(e) {
		setQuery(e.target.value);
	}
	//pagination
	const itemsPerPage = 8;
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = data?.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	// Invoke when user clicks to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};
	//data mapped into the card
	const card = currentItems.map((item, index) => {
		return (
			<Cards
				key={index}
				title={item.strMeal}
				image={item.strMealThumb}
				id={item.idMeal}
				category={item.strCategory}
			/>
		);
	});

	return (
		<div className="menu">
			<Navbar
				search={(e) => handleSearch(e)}
				value={query}
				onChange={(e) => handleOnChange(e)}
			/>
			<div className="w-full px-3 pt-4">
				<div className="menu-cards">{!isLoading ? card : <Spinner />}</div>
			</div>
			<div className="menu-paginate">
				{data.length > 8 ? (
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
						pageClassName={"pagination-page "}
						previousLinkClassName="pagination-num"
						nextLinkClassName="pageination-num"
						containerClassName={"pagination"}
						activeClassName={"pagination-active"}
					/>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Menu;
