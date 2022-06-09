import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function CardPayment() {
	return (
		<Container>
			<Row>
				<Form.Label htmlFor='inputCardNumber'>Card number</Form.Label>
				<Form.Control type='number' id='inputCardNumber' placeholder='1234 5678 9012 3456' />
			</Row>
			<Row>
				<Col>
					<Form.Label htmlFor='inputExpiryDate'>Expiry date</Form.Label>
					<Form.Control type='number' id='inputExpiryDate' placeholder='MM/DD' />
				</Col>
				<Col>
					<Form.Label htmlFor='inputCvc'>CVC / CVV</Form.Label>
					<Form.Control type='number' id='inputCvc' placeholder='3 digits' />
				</Col>
			</Row>

			<Row>
				<Form.Label htmlFor='inputName'>Name on the Card</Form.Label>
				<Form.Control type='text' id='inputName' placeholder='John Smith' />
			</Row>
		</Container>
	);
}

export default CardPayment;
