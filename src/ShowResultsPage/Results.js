import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getAllRoutes } from '../Redux/Routes/routeSlice';

const Results = () => {
	const routes = useSelector(getAllRoutes);
	console.log(routes);
	return (
		<div style={{ padding: '5%' }}>
			<Row className='justify-content-md-center result_header' style={{ height: '80px', padding: '2%', borderBottom: '2px solid gray' }}>
				<Col xs lg='3'>
					<h5>
						<strong>Agency Name</strong>
					</h5>
				</Col>
				<Col>
					<h5>Departure</h5>
				</Col>

				<Col>
					<h5>Arrival</h5>
				</Col>
				<Col>
					<h5>Duration</h5>
				</Col>

				<Col>
					<h5>Price</h5>
				</Col>
				<Col>
					<h5>Seats Available</h5>
				</Col>
			</Row>

			<Row className='justify-content-md-center result' style={{ height: 'auto', borderBottom: '2px solid gray', padding: '2%' }}>
				<Col xs lg='3'>
					<h5>
						<strong></strong>
					</h5>
				</Col>
				<Col>
					<h3></h3>
				</Col>

				<Col>
					<h3></h3>
				</Col>
				<Col>
					<h3></h3>
				</Col>
				<Col>
					<h3> €</h3>
				</Col>
				<Col>
					<Button sx={{ height: 'auto', fontSize: '100%', width: '120%', borderRadius: 3, marginRight: '8%' }} variant='contained'>
						<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/Payment'>
							RESERVE A SEAT
						</Link>{' '}
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Results;
