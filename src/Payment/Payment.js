import React from 'react';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Button from 'mui-react/lib/components/Button';
import { Container, Col, Row } from 'react-bootstrap';
import SimplePaper from './PaperPassengers';
import Reservation from './PaperSeatReservation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Contact from './PaperContact';
import PaperPayment from './PaperPayment';

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
					<Col xs={6} md={4}>
						<h3>Your Booking</h3>
						<Row>Date</Row>
						<Row>
							<Col>Depart time</Col>
							<Col>Station</Col>
						</Row>
						<Row>
							<Col>Arrive time</Col>
							<Col>Station</Col>
						</Row>
						<Row>
							<Col>
								<strong>Total</strong>
							</Col>
							<Col>
								<strong>66.99</strong>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Payment;
