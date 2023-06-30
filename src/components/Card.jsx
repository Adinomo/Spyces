import React from "react";
import { Button, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

function Cards(props) {
	let navigate = useNavigate();
	return (
		<div className="flexbox-con border">
			<div  className="card">
				<img
					variant="top"
					src={props.image}
					className="image"
				/>
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<p className="card-text">{props.category}</p>
					<button
						className="btn-view"
						onClick={() => {navigate(`/${props.id}`)}}>
						View recipe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
