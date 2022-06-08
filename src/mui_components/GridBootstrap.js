import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputWithIconFrom from './TextfieldFrom';
import InputWithIconTo from './TextFieldTo';
import Button from '@mui/material/Button';

import BasicDatePicker from './date';

export default function GridBootstrap() {
	return (
		<div style={{ padding: '5%', backgroundColor: 'rgb(220, 239, 255)' }}>
			<Row style={{ backgroundColor: 'white' }}>
				<Col>
					<InputWithIconFrom sx={{ height: '100%' }} />
				</Col>

				<Col>
					<InputWithIconTo />
				</Col>
				<Col>
					<BasicDatePicker />
				</Col>
				<Col>
					<Button sx={{ height: '100%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 0 }} variant='contained'>
						Contained
					</Button>
				</Col>
			</Row>
		</div>
	);
}
