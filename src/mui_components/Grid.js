import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import InputWithIconFrom from './TextfieldFrom';
import InputWithIconTo from './TextFieldTo';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncRoutes, fetchAsyncRoutesArriveCount, fetchAsyncRoutesDate, fetchAsyncRoutesDepartCount } from '../Redux/Routes/routeSlice';
import JsonData from '../api/MOCK_DATA_BUS.json';
export default function FullWidthGrid() {
	const [departCountry, setDepartCountry] = useState('');
	const [arriveCountry, setArriveCountry] = useState('');
	const [dateTime, setDateTime] = useState('');
	const dispatch = useDispatch();
	const clickHandler = (e) => {
		e.preventDefault();
		console.log(departCountry);
		console.log(arriveCountry);
		console.log(dateTime);
		dispatch(fetchAsyncRoutesDepartCount(departCountry));
		dispatch(fetchAsyncRoutesArriveCount(arriveCountry));
		dispatch(fetchAsyncRoutesDate(dateTime));
	};

	return (
		<div style={{ textAlign: 'center', margin: '20% 0' }}>
			<Row style={{ width: '85%', margin: '0 10%' }}>
				<Col style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
					<InputWithIconFrom sx={{ height: '100%' }} value={departCountry} onChange={(e) => setDepartCountry(e.target.value)} />
				</Col>

				<Col style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
					<InputWithIconTo value={arriveCountry} onChange={(e) => setArriveCountry(e.target.value)} />
				</Col>
				<Col style={{ width: '100%' }}>
					<Form.Control style={{ height: '100%' }} type='date' id='inputDate' value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
				</Col>
				<Col>
					<Button onClick={clickHandler} sx={{ height: '100%', fontSize: '100%', width: '100%', borderRadius: 2 }} variant='contained'>
						<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/ShowResultMain	'>
							Search
						</Link>{' '}
					</Button>
				</Col>
			</Row>
		</div>
	);
}
