import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Results = ({ routeData }) => {
	return (
		<div className='results'>
			<Row className='justify-content-md-center result_header' style={{ height: '80px', border: '1px solid red', padding: '2%' }}>
				<Col xs lg='3'>
					<h5>
						<strong>1 Bus found</strong>
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
			<Row className='justify-content-md-center result' style={{ height: '200px', border: '1px solid red', padding: '2%' }}>
				<Col xs lg='3'>
					<h5>
						<strong>{routeData.agencyName}</strong>
					</h5>
				</Col>
				<Col>
					<h3>{routeData.departTime}</h3>
				</Col>

				<Col>
					<h3>{routeData.arriveTime}</h3>
				</Col>
				<Col>
					<h3>{routeData.duration}</h3>
				</Col>
				<Col>
					<h3>{routeData.price}</h3>
				</Col>
				<Col>
					<p>10 seats available</p>
					<Button sx={{ height: '30%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 3 }} variant='contained'>
						<Link to='/Payment'>Reserve a seat</Link>{' '}
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Results;
