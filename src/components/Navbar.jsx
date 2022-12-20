import React from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
import logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom'

function Navbar({value, onChange}) {
	return (
		<Container
			fluid
			className="gree">
			<Row className="p-4">
				<Col xs={4}>
					<img
						src={logo}
						width={45}
					/>
					<label className="fst-italic text-white fw-bold fs-5"><Link to={"/"}>Spyces</Link></label>
				</Col>
				<Col xs={8}>
					<Form >
						<Form.Control
							type="text"
							placeholder="search for a recipe"
							className="search"
							onChange={onChange}
							value={value}
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Navbar;