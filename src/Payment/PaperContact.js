import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Row, Col } from 'react-bootstrap';

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
			<Paper style={{ width: '100%', padding: '2%' }} variant='outlined' elevation={3}>
				<h4>Contact</h4>
				<Row>
					<Col>
						<label>Email</label>
						<Col>
							<input type='text' id='fname' name='fname' />
						</Col>
					</Col>
					<Col>
						<label>Phone number (optional)</label>
						<Col>
							<input type='text' id='lname' name='lname' />
						</Col>
					</Col>
				</Row>
			</Paper>
		</Box>
	);
}
