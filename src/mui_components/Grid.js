import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import InputWithIconFrom from './TextfieldFrom';
import InputWithIconTo from './TextFieldTo';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routes } from '../api/routes';
import BasicSelect from './BasicSelect';

export default function FullWidthGrid(props) {
	const [departCountry, setDepartCountry] = useState('');
	const [arriveCountry, setArriveCountry] = useState('');
	const [dateTime, setDateTime] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [data, setData] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		props.history.push({
			pathname: '/ShowResultMain',
			state: {
				departCountry,
				arriveCountry,
				dateTime,
			},
		});
	};

	return (
		<Form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20% 0' }}>
		 {routes.map{	<Row style={{ width: '85%', margin: '0 10%', height: '100%' }}>
				<Col>
					<select value={departCountry} onChange={(e) => setDepartCountry(e.target.value)} style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
						{routes.map((route) => (
							<option key={route.id}>{route.departCountry}</option>
						))}
					</select>
				</Col>

				<Col>
					<select value={departCountry} onChange={(e) => setDepartCountry(e.target.value)} style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
						{routes.map((route) => (
							<option key={route.id}>{route.arriveCountry}</option>
						))}
					</select>
				</Col>
				<Col style={{ width: '100%' }}>
					<Form.Control style={{ height: '100%' }} type='date' id='inputDate' value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
				</Col>
				<Col>
					<Button sx={{ height: '100%', fontSize: '100%', width: '100%', borderRadius: 2 }} variant='contained'>
						<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/ShowResultMain	'>
							Search
						</Link>{' '}
					</Button>
				</Col>
			</Row>
		</Form>
	);
}
