import * as React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import InputWithIconFrom from './TextfieldFrom';
import InputWithIconTo from './TextFieldTo';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function FullWidthGrid() {
	return (
		<div style={{ textAlign: 'center', margin: '20% 0' }}>
			<Row style={{ width: '85%', margin: '0 10%' }}>
				<Col style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
					<InputWithIconFrom sx={{ height: '100%' }} />
				</Col>

				<Col style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
					<InputWithIconTo sx={{}} />
				</Col>
				<Col style={{ width: '100%' }}>
					<Form.Control style={{ height: '100%' }} type='date' id='inputDate' />
				</Col>
				<Col>
					<Button sx={{ height: '100%', fontSize: '100%', width: '100%', borderRadius: 2 }} variant='contained'>
						<Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/ShowResultMain'>
							Search
						</Link>{' '}
					</Button>
				</Col>
			</Row>
		</div>
	);
}
