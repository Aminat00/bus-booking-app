import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Row, Col } from 'react-bootstrap';
import FlightClassTwoToneIcon from '@mui/icons-material/FlightClassTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import Button from 'mui-react/lib/components/Button';

export default function Reservation() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 1,
					width: 128,
					height: 128,
				},
			}}>
			<Paper style={{ width: '100%', padding: '2%', height: 'auto' }} variant='outlined' elevation={3}>
				<h4>Seat Resevation</h4>
				<Button variant='text' style={{ display: 'inline-block' }}>
					<Row style={{ border: '1px solid darkgray', margin: '10px' }}>
						<Col xs={2} md={3}>
							<FlightClassTwoToneIcon style={{ width: '50px', height: '50px' }} />
						</Col>
						<Col xs={4} md={3} style={{ textAlign: 'center', margin: '15px' }}>
							<strong>Select your Seat</strong>
						</Col>
						<Col xs={2} md={3}>
							<ArrowForwardIosTwoToneIcon style={{ width: '30px', height: '30px', margin: '10px 0 10px 25px' }} color='action' />
						</Col>
					</Row>
				</Button>
			</Paper>
		</Box>
	);
}
