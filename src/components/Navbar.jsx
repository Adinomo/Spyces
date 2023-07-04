import React, { useEffect, useState } from "react";
import logo from "/src/assets/img/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import categories from "../api/categories.json";
import areas from "../api/areas.json";

function Navbar({ value, search, onChange, setEndpoint}) {
	const [open, setOpen] = useState(false);
	const [category, setCategory] = useState([categories]);
	const [area, setArea] = useState([areas]);

	const navigate = useNavigate();
	const location = useLocation();

	const handleSearchSubmit = () => {
		if (!location.pathname === "/" ) navigate("/")
		setOpen(false);
		setEndpoint.current = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
		search();
	}

	const handleCategory = (e) => {
		if (location.pathname !== "/") navigate("/");
		setEndpoint.current = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.currentTarget.innerText}`;
		search();
	}

	const handleArea = (e) => {
		if (!location.pathname === "/") navigate("/");
		setEndpoint.current = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.currentTarget.innerText}`;
		search();
	}

	return (
		<div className="navbar">
			<div>
				{/* <img
						src={logo}
						className='w-10'
					/> */}
				<label className="text-white italic text-2xl tracking-tighter font-bold pe-1">
					<Link to={"/"}>Spyces</Link>
				</label>
			</div>
			<div
				className={`navbar-collapse ${
					open ? "opacity-100 md:opacity-100" : "opacity-0 md:opacity-100"
				}`}>
				<ul className="navbar-dropdown-item ">
					<ul className="relative me-6">
						<div className="cursor-pointer group mb-2 md:mb-0">
							Categories{" "}
							<RiArrowDropDownLine
								className="inline group-hover:rotate-180 transition-transform duration-300"
								size={23}
							/>{" "}
							<div className="navbar-dropdown h-[200px] w-[150px] overflow-scroll">
								{category[0].meals.map((el, index) => (
									<li key={index} onClick={e => handleCategory(e)}>{el.strCategory}</li>
								))}
							</div>
						</div>
					</ul>
					<div className="cursor-pointer group pe-4 mb-4 md:mb-0">
						Area{" "}
						<RiArrowDropDownLine
							className="inline group-hover:rotate-180 transition-transform duration-300"
							size={23}
						/>
						<div className="navbar-dropdown w-fit h-[200px] z-10 overflow-scroll">
							{area[0].meals.map((el, index) => (
								<li key={index} onClick={e => handleArea(e)}>{el.strArea}</li>
							))}
						</div>
					</div>
				</ul>
				<div className="w-full md:max-w-[300px] md:ps-2 flex relative">
					<input
						type="text"
						placeholder="Search for a recipe"
						className="navbar-search"
						value={value}
						onChange={onChange}
					/>
					<FiSearch
						className="navbar-button text-white p-[0.3rem] cursor-pointer"
						onClick={handleSearchSubmit}
					/>
				</div>
			</div>
			<div
				className="h-fit w-fit md:hidden z-10 cursor-pointer"
				onClick={() => setOpen(!open)}>
				{open ? (
					<AiOutlineClose
						className="text-gray-400"
						size={35}
						onClick={() => setOpen(!open)}
					/>
				) : (
					<RxHamburgerMenu
						className="text-white"
						size={35}
						onClick={() => setOpen(!open)}
					/>
				)}
			</div>
		</div>
	);
}

export default Navbar;
