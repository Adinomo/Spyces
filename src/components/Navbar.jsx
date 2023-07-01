import React, { useState } from "react";
import logo from "/src/assets/img/logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


function Navbar({ value, search, onChange }) {
	const [open, setOpen] = useState(false);

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
						<li className="cursor-pointer group mb-2 md:mb-0">
							Categories{" "}
							<RiArrowDropDownLine
								className="inline group-hover:rotate-180 transition-transform duration-300"
								size={23}
							/>{" "}
							<div className="navbar-dropdown">
								<li>Pasta</li>
								<li>Beef</li>
								<li>Seafood</li>
							</div>
						</li>
					</ul>
					<li className="cursor-pointer group pe-4 mb-4 md:mb-0">
						Area{" "}
						<RiArrowDropDownLine
							className="inline group-hover:rotate-180 transition-transform duration-300"
							size={23}
						/>
						<div className="navbar-dropdown w-fit">
							<li>Pasta</li>
							<li>Beef</li>
							<li>Seafood</li>
						</div>
					</li>
				</ul>
				<div className="w-full md:max-w-[300px] md:ps-2 flex relative">
					<input
						type="text"
						placeholder="Search for a recipe"
						className="navbar-search"
						value={value}
						onChange={onChange}
					/>
					<FiSearch className="navbar-button text-white p-[0.3rem] cursor-pointer" />
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
