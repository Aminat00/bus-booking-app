import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Results = ({ routes }) => {
	return (
		<div className='results'>
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
			{routes &&
				routes.map((route) => (
					<Row key={route.id} className='justify-content-md-center result' style={{ height: 'auto', borderBottom: '2px solid gray', padding: '2%' }}>
						<Col xs lg='3'>
							<h5>
								<strong>{route.agencyName}</strong>
							</h5>
						</Col>
						<Col>
							<h3>{route.departTime}</h3>
						</Col>

						<Col>
							<h3>{route.arriveTime}</h3>
						</Col>
						<Col>
							<h3>{route.duration}</h3>
						</Col>
						<Col>
							<h3>{route.price} €</h3>
						</Col>
						<Col>
							<p>10 seats available</p>
							<Button sx={{ height: 'auto', fontSize: '100%', width: '120%', borderRadius: 3, marginRight: '8%' }} variant='contained'>
								<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/Payment'>
									RESERVE A SEAT
								</Link>{' '}
							</Button>
						</Col>
					</Row>
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		routes: state.shop.routes,
	};
};
export default connect(mapStateToProps)(Results);
