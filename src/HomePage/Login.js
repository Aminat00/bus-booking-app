import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../mui_components/MenuBar';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div>
			<ResponsiveAppBar />
			<Container>
				<Form style={{ margin: '5%' }}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
						<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Text className='text-muted'>Dont have account yet?</Form.Text>
						<Form.Text>
							Lets then <Link to='/Register'>SignUp</Link> then
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
		</div>
	);
}

export default Login;
