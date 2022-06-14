import React from 'react';
import ResponsiveAppBar from '../mui_components/MenuBar';

import { Container, Col, Row } from 'react-bootstrap';
import SimplePaper from './PaperPassengers';
import Reservation from './PaperSeatReservation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Contact from './PaperContact';
import PaperPayment from './PaperPayment';
import '../../assets/styles/Payment.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RightBar from './RightBar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {
	const [open, setOpen] = useState(false);
	return (
		<div style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
			<ResponsiveAppBar />
			<Container style={{ padding: '3%' }}>
				<Row>
					<Col xs={12} md={8}>
						<Button to='/ShowResultMain' variant='text'>
							<Link to='/ShowResultMain'>
								<ArrowBackIosIcon />
								Back
							</Link>
						</Button>
						<SimplePaper />
						<Reservation setOpen={setOpen} />
						<Contact />
						<PaperPayment />
						<RightBar open={open} setOpen={setOpen} />
					</Col>
					<Col className='total' xs={6} md={4}>
						<div className='payment'>
							<h3>Your Booking</h3>
							<Row className='date_row row'>
								<h4>30/06/2022</h4>
							</Row>
							<Row className='depart_row row'>
								<Col className='col_left'>1:35 AM</Col>
								<Col className='col_right'>Berlin Central Bus Station</Col>
							</Row>
							<Row className='arrive_row row'>
								<Col className='col_left'>10:32 AM</Col>
								<Col className='col_right'>Munich Central Station</Col>
							</Row>
							<Row className='total_row row'>
								<Col className='col_left'>
									<strong>Total</strong>
								</Col>
								<Col className='col_right'>
									<strong>$86.81</strong>
								</Col>
							</Row>
							<FormControlLabel style={{ marginTop: '10%' }} control={<Checkbox defaultChecked />} label='I declare to have read the Privacy Policy and I agree to the T&C of Booking and T&C of Carriage.' />
							<Row>
								<Button variant='contained' sx={{ height: '100%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 3 }}>
									Pay Now
								</Button>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Payment;
