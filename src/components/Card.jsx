import React from "react";
import { Button, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

function Cards(props) {
	let navigate = useNavigate();
	return (
		<div className="flexbox-con">
			<Card style={{ width: "16.5rem" }} className="card">
				<Card.Img
					variant="top"
					src={props.image}
					className="image"
				/>
				<Card.Body className="card-body">
					<Card.Title className="card-title">{props.title}</Card.Title>
					<p className="card-text">{props.category}</p>
					<Button
						variant="success"
						className="btn-view"
						onClick={() => {navigate(`/${props.id}`)}}>
						View recipe
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Cards;
