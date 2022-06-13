import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Results from './Results';
import { connect } from 'react-redux';
import { Container, Row, Col, Form } from 'react-bootstrap';
import InputWithIconFrom from '../mui_components/TextfieldFrom';
import InputWithIconTo from '../mui_components/TextFieldTo';
import Button from '@mui/material/Button';
import { Link, Routes } from 'react-router-dom';

const ShowResultMain = ({ routes }) => {
	const [query, setQuery] = useState('');

	return (
		<div>
			<ResponsiveAppBar />
			{routes.map((route) => (
				<Results key={route.id} routeData={route} />
			))}
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
						<h3>{routeData.duration} h</h3>
					</Col>
					<Col>
						<h3>{routeData.price}</h3>
					</Col>
					<Col>
						<Button sx={{ height: '100%', fontSize: '100%', width: '120%', borderRadius: 3, marginRight: '8%' }} variant='contained'>
							<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/Payment'>
								RESERVE A SEAT
							</Link>{' '}
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		routes: state.shop.routes,
	};
};

export default connect(mapStateToProps)(ShowResultMain);
