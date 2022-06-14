import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../mui_components/MenuBar';

function Login() {
	const [fName, setFName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const register = useSelector((state) => state.registeredReducer);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.registeredReducer);
	return (
		<div>
			<ResponsiveAppBar />

			<Form style={{ margin: '5%' }}>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label> First Name</Form.Label>
					<Form.Control type='Name' placeholder='EnterYour First Name' value={fName} onChange={(e) => setFName(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit' onClick={() => dispatch(register())}>
					Submit
				</Button>
			</Form>
		</div>
	);
	console.log(users);
}

export default Login;
