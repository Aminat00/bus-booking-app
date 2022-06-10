import React from 'react';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Button from '@mui/material/Button';
import { Container, Col, Row } from 'react-bootstrap';
import SimplePaper from './PaperPassengers';
import Reservation from './PaperSeatReservation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Contact from './PaperContact';
import PaperPayment from './PaperPayment';
import '../styles/Payment.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Payment() {
	return (
		<div style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
			<ResponsiveAppBar />
			<Container style={{ padding: '3%' }}>
				<Row>
					<Col xs={12} md={8}>
						<Button variant='text'>
							<ArrowBackIosIcon /> Back
						</Button>
						<SimplePaper />
						<Reservation />
						<Contact />
						<PaperPayment />
					</Col>
					<Col className='total' xs={6} md={4}>
						<div className='payment'>
							<h3>Your Booking</h3>
							<Row className='date_row row'>
								<h4>Date</h4>
							</Row>
							<Row className='depart_row row'>
								<Col className='col_left'>Depart time</Col>
								<Col className='col_right'>Station</Col>
							</Row>
							<Row className='arrive_row row'>
								<Col className='col_left'>Arrive time</Col>
								<Col className='col_right'>Station</Col>
							</Row>
							<Row className='total_row row'>
								<Col className='col_left'>
									<strong>Total</strong>
								</Col>
								<Col className='col_right'>
									<strong>66.99</strong>
								</Col>
							</Row>
							<FormControlLabel style={{ marginTop: '10%' }} control={<Checkbox defaultChecked />} label='I declare to have read the Privacy Policy and I agree to the T&C of Booking and T&C of Carriage.' />
							<Row>
								<Button variant='contained' href='#contained-buttons' sx={{ height: '100%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 3 }}>
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
