import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function InputWithIconFrom() {
	return (
		<Box sx={{ '& > :not(style)': { m: 0.5, p: 1 } }}>
			<Box sx={{ display: 'flex', alignItems: 'flex-end', height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '3px' }}>
				<LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
				<TextField id='input-with-sx' label='From' variant='standard' />
			</Box>
		</Box>
	);
}
