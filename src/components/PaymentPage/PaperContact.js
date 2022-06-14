import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Row, Col, Form } from 'react-bootstrap';

export default function Contact() {
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
				<h4>Contact</h4>
				<Row>
					<Col>
						<Form.Label htmlFor='inputEmail'>Email</Form.Label>
						<Form.Control type='text' id='inputEmail' />
					</Col>
					<Col>
						<Form.Label htmlFor='inputNumber'>Phone Number</Form.Label>
						<Form.Control type='text' id='inputNumber' />
					</Col>
				</Row>
			</Paper>
		</Box>
	);
}
