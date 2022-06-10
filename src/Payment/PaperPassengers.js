import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Row, Col, Form } from 'react-bootstrap';

export default function SimplePaper() {
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
				<h4>Passengers</h4>
				<Row>
					<Col>
						<Form.Label htmlFor='inputFName'>First Number</Form.Label>
						<Form.Control type='text' id='inputFName' />
					</Col>
					<Col>
						<Form.Label htmlFor='inputLName'>Card number</Form.Label>
						<Form.Control type='text' id='inputLName' />
					</Col>
				</Row>
			</Paper>
		</Box>
	);
}
