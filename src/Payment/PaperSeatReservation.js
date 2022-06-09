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
			<Paper style={{ width: '100%', padding: '2%' }} variant='outlined' elevation={3}>
				<h4>Seat Resevation</h4>
				<Button variant='contained' sx={{ height: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 0 }}>
					<Row style={{ border: '1px solid darkgray', margin: '10px' }}>
						<Col>
							<FlightClassTwoToneIcon style={{ width: '50px', height: '50px' }} />
						</Col>
						<Col xs={12} md={8} style={{ textAlign: 'center', margin: '10px' }}>
							<strong>Select your Seat</strong>
						</Col>
						<Col>
							<ArrowForwardIosTwoToneIcon style={{ padding: '10px 0 10px 50px', width: '50px', height: '50px' }} color='action' />
						</Col>
					</Row>
				</Button>
			</Paper>
		</Box>
	);
}
