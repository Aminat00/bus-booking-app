import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../mui_components/MenuBar';

function Support() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<div>
			<ResponsiveAppBar />

			<Form>
				<Row style={{ margin: '5%', width: '100%' }}>
					<Col style={{ width: '30%' }}>
						<Form.Group className='mb-2' controlId='formBasicEmail'>
							<Form.Label>Email Name</Form.Label>
							<Form.Control type='fName' placeholder='Enter fName' />
						</Form.Group>
						<Form.Group className='mb-2' controlId='formBasicSurname'>
							<Form.Label>Enter Surname</Form.Label>
							<Form.Control type='surname' placeholder='Enter surname' />
						</Form.Group>
						<Form.Group className='mb-2' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>
					</Col>
					<Col style={{ width: '60%' }}>
						<Form.Group style={{ display: 'inline-block' }} className='mb-2' controlId='formBasicMessage'>
							<textarea type='Message' placeholder='Write your message here' value={message} onChange={(e) => setMessage(e.target.value)} rows={10} cols={70}></textarea>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default Support;
