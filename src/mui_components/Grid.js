import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputWithIconFrom from './TextfieldFrom';
import InputWithIconTo from './TextFieldTo';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import BasicDatePicker from './date';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
	return (
		<Box className='box' sx={{ flexGrow: 1 }}>
			<Grid container spacing={0} className='row_header'>
				<Grid item xs={2} md={2} className='col'>
					<Item
						sx={{
							'& .css-1633um2-MuiPaper-root': {
								height: '90%',
							},
						}}>
						<InputWithIconFrom sx={{ height: '100%' }} />
					</Item>
				</Grid>

				<Grid item xs={2} md={2} className='col'>
					<Item>
						<InputWithIconTo />
					</Item>
				</Grid>
				<Grid item xs={2} md={2} className='col'>
					<Item>
						<BasicDatePicker />
					</Item>
				</Grid>
				<Grid item xs={2} md={2} className='col'>
					<Button sx={{ height: '100%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 0 }} variant='contained'>
						{' '}
						<Link to='/ShowResultMain'>Search</Link>
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
